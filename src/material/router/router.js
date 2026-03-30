/**
 * Router class for handling client-side routing with support for nested routes, outlets, and navigation lifecycle events
 * @class
 */
class Router {
    /**
     * Creates a new Router instance
     * @param {Array<Object>} [routes=[]] - Array of route configuration objects
     * @param {Object} [options={}] - Router configuration options
     * @param {boolean} [options.historyApiFallback=false] - Use History API instead of hash-based routing
     */
    constructor(routes = [], options = {}) {
        this.options = {
            historyApiFallback: false,
            ...options,
        };

        /** @type {Array} */
        this.routes = [...routes];

        /** @type {AbortController} */
        this.controller = null;

        /** @type {string} */
        this.path = "/";

        /** @type {Object.<string, string|Array<string>>} */
        this.query = {};

        /** @type {Object.<string, string>} */
        this.params = {};
    }

    /**
     * Emits a custom event on window
     * @private
     * @param {string} type - Event type name
     * @param {*} [detail=this] - Event detail data
     */
    _emit(type, detail = this) {
        const event = new CustomEvent(type, {
            bubbles: true,
            // composed: true,
            cancelable: true,
            detail,
        });

        window.dispatchEvent(event);
    }

    /**
     * Builds query object from URL search string
     * @private
     * @param {string} search - URL search string (e.g., "?foo=bar&baz=qux")
     * @returns {Object} Query parameters object with support for multiple values
     */
    _buildQuery(search) {
        const searchParams = new URLSearchParams(search);

        const query = {};
        for (const [name, value] of searchParams.entries()) {
            if (query[name]) {
                if (Array.isArray(query[name])) {
                    query[name].push(value);
                } else {
                    query[name] = [query[name], value];
                }
            } else {
                query[name] = value;
            }
        }
        return query;
    }

    /**
     * Normalizes pathname by removing duplicate slashes and trailing slash
     * @private
     * @param {string} pathname - Raw pathname string
     * @returns {string} Normalized pathname
     */
    _normalizePathname(pathname) {
        return pathname.replace(/\/+/g, "/").replace(/(?!^)\/$/, "");
    }

    /**
     * Prepares navigation by parsing current path and query from URL
     * @private
     * @param {Event} event - Triggering event
     */
    _prepareNavigation(event) {
        let pathname = "/";
        let search = "";
        if (this.options.historyApiFallback) {
            pathname = window.location.pathname;
            search = window.location.search;
        } else {
            [, pathname = "/", search = ""] = window.location.hash.match(/^#?([^\?]+)?(\?(.*))?$/);
        }

        this.path = this._normalizePathname(pathname);
        this.query = this._buildQuery(search);
    }

    /**
     * Recursively finds matching routes for current path
     * @private
     * @param {Array<Object>} [routes=this.routes] - Routes to search through
     * @param {Object|null} [parent=null] - Parent route for nested routes
     * @param {Array<Object>} [results=[]] - Accumulator for matched routes
     * @returns {Array<Object>|undefined} Array of matched routes or undefined if no match
     */
    _getRoutes(routes = this.routes, parent = null, results = []) {
        for (const route of routes) {
            if (!route.regexp) {
                route.parent = parent;
                route.pathname = this._normalizePathname(`${route.parent?.pathname || "/"}/${route.path}`);
                route.regexp = new RegExp(`^${route.pathname.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/g, "(?:.*)")}(?:/?\$)`, "i");
            }

            const matches = this.path.match(route.regexp);
            if (matches) {
                this.params = {
                    ...matches?.groups,
                };
                return [...results, route];
            }

            if (route.children?.length) {
                const matches = this._getRoutes(route.children, route, [...results, route]);
                if (matches) {
                    return matches;
                }
            }
        }
    }

    /**
     * Finds or waits for an outlet element to be available
     * @private
     * @param {HTMLElement} container - Container element to search in
     * @param {Object} route - Current route
     * @returns {Promise<HTMLElement>} The outlet element
     * @throws {Error} If outlet not found within timeout period
     */
    async _getOutlet(container, route) {
        return await new Promise((resolve, reject) => {
            let observer;
            let outlet;
            let selector = "md-outlet:not([name])";
            let target = container;
            if (route.outlet) {
                selector = `md-outlet[name="${route.outlet}"]`;
                target = document.body;
            }

            const timeoutCallback = () => {
                if (observer) {
                    observer.disconnect();
                }

                reject(new Error("Can't find an outlet"));
            };

            const callback = () => {
                outlet = target.querySelector(selector);
                if (outlet) {
                    window.clearTimeout(timeout);

                    if (observer) {
                        observer.disconnect();
                    }

                    resolve(outlet);
                }
            };

            const timeout = window.setTimeout(timeoutCallback, 1000 * 5);

            observer = new MutationObserver(callback);
            observer.observe(target, {
                subtree: true,
                childList: true,
            });

            callback();
        });
    }

    /**
     * Handles beforeLoad hook for a route with timeout and abort support
     * @private
     * @param {Object} route - Route object with beforeLoad hook
     * @returns {Promise<void>}
     * @throws {Error} If beforeLoad times out or is aborted
     */
    async _handleBeforeLoad(route) {
        await new Promise((resolve, reject) => {
            const next = (error) => {
                this.controller.signal.removeEventListener("abort", abortCallback);

                window.clearTimeout(timeout);

                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            };

            const timeoutCallback = () => {
                next(new Error("Waiting too long"));
            };

            const abortCallback = (event) => {
                next(event);
            };

            const timeout = window.setTimeout(timeoutCallback, 1000 * 5);

            this.controller.signal.addEventListener("abort", abortCallback);

            route.beforeLoad(next);
        });
    }

    /**
     * Renders component for a route by lazy loading if needed and inserting into appropriate outlet
     * @private
     * @param {Object} route - Route object with component or load function
     * @returns {Promise<void>}
     * @throws {Error} If component or load function not set
     */
    async _renderComponent(route) {
        if (!route.component) {
            if (!route.load) {
                throw new Error("load() not yet set");
            }

            route.component = await route.load();
        }

        const container = route.parent?.component || document.body;

        const outlet = await this._getOutlet(container, route);

        if (!route.component) {
            throw new Error("component not yet set");
        }

        if (!route.component.isConnected) {
            route.component.isComponent = true;

            outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
        }
    }

    /**
     * Removes component elements that are no longer in the current route tree
     * @private
     * @param {Array<Object>} routes - Currently active routes
     */
    _removeComponents(routes) {
        const outlets = Array.from(document.body.querySelectorAll("md-outlet"));

        for (const outlet of outlets) {
            let element = outlet.nextElementSibling;

            while (element) {
                if (
                    !outlets.find((outlet) => outlet === element) && //
                    !routes.find((route) => route.component === element) &&
                    element.isComponent
                ) {
                    element.remove();
                }

                element = element.nextElementSibling;
            }
        }
    }

    /**
     * Main navigation handler that processes route matching, hooks, and rendering
     * @private
     * @param {Event} event - Navigation trigger event
     * @returns {Promise<void>}
     * @throws {Error} If navigation fails at any step
     */
    async _handleNavigation(event) {
        try {
            this._emit("routeStart");

            if (this.controller && !this.controller.signal.aborted) {
                this.controller.abort();
            }

            if (!this.controller || (this.controller && this.controller.signal.aborted)) {
                this.controller = new AbortController();
            }

            this._prepareNavigation(event);

            const routes = this._getRoutes();

            this._emit("routeUpdate");

            for (const route of routes) {
                if (route.redirectTo) {
                    this.navigate(route.redirectTo);
                }

                if (route.beforeLoad) {
                    try {
                        await this._handleBeforeLoad(route);
                    } catch (error) {
                        if (error instanceof Error) {
                            throw error;
                        } else {
                            this._emit("routeAbort");
                            break;
                        }
                    }
                }

                await this._renderComponent(route);
            }

            this._removeComponents(routes);

            this._emit("routeEnd");
        } catch (error) {
            this._emit("routeError");

            throw error;
        }
    }

    /**
     * Navigates to the specified URL
     * @param {string} url - Destination URL
     */
    navigate(url) {
        if (this.options.historyApiFallback) {
            window.history.pushState({}, null, url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * Handles click events on routerLink elements
     * @private
     * @param {Event} event - Click event
     */
    _requestNavigation(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (!routerLink) return;

        const url = routerLink.getAttribute("routerLink");
        this.navigate(url);
    }

    /**
     * Starts listening for navigation events (DOMContentLoaded, popstate/hashchange, and clicks)
     */
    listen() {
        window.addEventListener("DOMContentLoaded", (event) => this._handleNavigation(event));

        if (this.options.historyApiFallback) {
            const pushState = window.history.pushState.bind(window.history);
            window.history.pushState = (...args) => {
                pushState(...args);
                this._handleNavigation();
            };

            window.addEventListener("popstate", (event) => this._handleNavigation(event));
        } else {
            window.addEventListener("hashchange", (event) => this._handleNavigation(event));
        }

        window.addEventListener("click", (event) => this._requestNavigation(event));
    }
}

export { Router };
