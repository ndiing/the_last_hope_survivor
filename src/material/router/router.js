/**
 * @typedef {Object} Route
 * @property {string} path - Path pattern (bisa mengandung parameter :id atau wildcard *)
 * @property {string} [outlet] - Nama outlet untuk render component (optional)
 * @property {Function} [load] - Async function yang me-return component
 * @property {Function} [beforeLoad] - Callback yang dijalankan sebelum load (menerima callback function)
 * @property {Array<Route>} [children] - Nested routes
 * @property {HTMLElement} [component] - Component instance (di-set setelah load)
 */

/**
 * @typedef {Object} ProcessedRoute
 * @property {string} path - Path pattern original
 * @property {string} pathname - Path yang sudah dinormalisasi
 * @property {RegExp} regexp - Regular expression untuk matching path
 * @property {string} [outlet] - Nama outlet
 * @property {Function} [load] - Load function
 * @property {Function} [beforeLoad] - BeforeLoad callback
 * @property {Array<ProcessedRoute>} [children] - Nested routes
 * @property {ProcessedRoute} [parent] - Parent route
 * @property {HTMLElement} [component] - Component instance
 */

/**
 * @typedef {Object} RouterOptions
 * @property {boolean} [historyApiFallback=false] - Menggunakan History API atau hash-based routing
 */

/**
 * Router class untuk menangani navigasi dan routing di aplikasi web
 * Mendukung nested routes, outlet system, dan history API fallback
 *
 * @class Router
 * @example
 * const router = new Router(routes, { historyApiFallback: true });
 * router.listen();
 */
class Router {
    /**
     * Membuat instance Router baru
     * @param {Array<Route>} routes - Daftar konfigurasi route
     * @param {RouterOptions} [options={}] - Opsi konfigurasi router
     */
    constructor(routes = [], options = {}) {
        this.options = {
            historyApiFallback: false,
            ...options,
        };

        /** @type {Array<ProcessedRoute>} */
        this.routes = routes;

        /** @type {AbortController} */
        this.controller = null;

        /** @type {string} */
        this.path = "";

        /** @type {Object.<string, string|Array<string>>} */
        this.query = {};

        /** @type {Object.<string, string>} */
        this.params = {};
    }

    /**
     * Handler untuk perubahan route (popstate/hashchange)
     * @private
     * @param {Event} event - Event object
     */
    _handleChange(event) {
        this._handleRequest(event);
        this._handleNavigation(event);
    }

    /**
     * Mencari route yang cocok dengan path saat ini secara rekursif
     * Method ini akan menelusuri nested routes dan mengembalikan jalur route yang cocok
     *
     * @private
     * @param {Array<ProcessedRoute>} [routes=this.routes] - Daftar route yang akan ditelusuri
     * @param {ProcessedRoute|null} [parent=null] - Parent route untuk route saat ini
     * @param {Array<ProcessedRoute>} [result=[]] - Akumulator untuk menyimpan jalur route yang ditemukan
     * @returns {Array<ProcessedRoute>|undefined} - Array berisi route yang cocok (dari parent ke child),
     *                                               atau undefined jika tidak ditemukan
     *
     * @example
     * // Misal path = "/users/123/posts/456"
     * // Akan mengembalikan:
     * // [
     * //   { path: "/users", ... },
     * //   { path: "/:id", ... },
     * //   { path: "/posts", ... },
     * //   { path: "/:postId", ... }
     * // ]
     */
    _getRoutes(routes = this.routes, parent = null, result = []) {
        for (const route of routes) {
            if (!route.regexp) {
                route.parent = parent;
                route.pathname = this._normalizePathname((route.parent?.path || "/") + route.path);
                route.regexp = new RegExp(`^${route.pathname.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/g, "(?:.*)")}(?:/?\$)`, "i");
            }

            const matches = this.path.match(route.regexp);
            if (matches) {
                this.params = { ...matches.groups };
                return [...result, route];
            }

            if (route?.children?.length) {
                const matches = this._getRoutes(route.children, route, [...result, route]);

                if (matches) {
                    return matches;
                }
            }
        }
    }

    /**
     * Mencari dan mendapatkan element outlet
     * @private
     * @param {HTMLElement} container - Container tempat mencari outlet
     * @param {string} [outlet] - Nama outlet (optional)
     * @returns {Promise<HTMLElement>} Element outlet yang ditemukan
     * @throws {Error} Jika timeout (5 detik) mencari outlet
     */
    _getOutlet(container, outlet) {
        return new Promise((resolve, reject) => {
            let element;
            let selector = "md-outlet:not([name])";
            let observer;
            let target = container;

            if (outlet) {
                selector = `md-outlet[name="${outlet}"]`;
                target = document.body;
            }

            const callbackTimeout = () => {
                if (observer) {
                    observer.disconnect();
                }

                reject(new Error("waiting too long md-outlet"));
            };

            const timeout = window.setTimeout(callbackTimeout, 1000 * 5);

            const callback = () => {
                element = target.querySelector(selector);

                if (element) {
                    window.clearTimeout(timeout);

                    if (observer) {
                        observer.disconnect();
                    }

                    resolve(element);
                }
            };

            observer = new MutationObserver(callback);
            observer.observe(target, {
                childList: true,
                subtree: true,
            });

            callback();
        });
    }

    /**
     * Menangani proses navigasi dan rendering routes
     * Method ini akan memicu serangkaian event selama proses navigasi:
     * - routerCurrentEntryChange: Saat navigasi dimulai
     * - routerNavigate: Sebelum memproses routes
     * - routerNavigateError: Jika terjadi error di beforeLoad
     * - routerNavigateSuccess: Setelah semua route berhasil di-render
     *
     * @private
     * @param {Event} event - Event object (popstate/hashchange/hashchange)
     * @returns {Promise<void>}
     * @emits {CustomEvent} routerCurrentEntryChange - Dipicu saat navigasi dimulai
     * @emits {CustomEvent} routerNavigate - Dipicu sebelum memproses routes
     * @emits {CustomEvent} routerNavigateError - Dipicu jika sebelumLoad gagal (detail: { error })
     * @emits {CustomEvent} routerNavigateSuccess - Dipicu setelah semua route berhasil di-render
     *
     * @example
     * // Listening to router events
     * window.addEventListener('routerNavigate', (e) => {
     *   console.log('Navigasi dimulai', e.detail);
     * });
     *
     * window.addEventListener('routerNavigateSuccess', (e) => {
     *   console.log('Navigasi selesai!', e.detail);
     *   // Bisa untuk hide loading spinner, dll
     * });
     *
     * window.addEventListener('routerNavigateError', (e) => {
     *   console.error('Navigasi gagal:', e.detail.error);
     *   // Tampilkan error message ke user
     * });
     */
    async _handleNavigation(event) {
        this._emit("routerCurrentEntryChange");

        this._setController();

        this._emit("routerNavigate");

        const routes = this._getRoutes();
        for (const route of routes) {
            if (route.beforeLoad) {
                try {
                    await this._handleBeforeLoad(route);
                } catch (error) {
                    console.error(error);

                    this._emit("routerNavigateError");

                    break;
                }
            }

            await this._render(route);
        }

        this._remove(routes);

        this._emit("routerNavigateSuccess");
    }

    /**
     * Mengatur AbortController untuk membatalkan request sebelumnya
     * @private
     */
    _setController() {
        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }

        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }
    }

    /**
     * Menjalankan callback beforeLoad dari route
     * @private
     * @param {ProcessedRoute} route - Route yang akan di-load
     * @returns {Promise<void>}
     * @throws {Error} Jika beforeLoad timeout atau error
     */
    async _handleBeforeLoad(route) {
        await new Promise((resolve, reject) => {
            const timeout = window.setTimeout(() => {
                callback(new Error("waiting too long beforeLoad()"));
            }, 1000 * 5);

            const callback = (error) => {
                window.clearTimeout(timeout);

                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            };

            this.controller.signal.addEventListener("abort", callback);

            route.beforeLoad(callback);
        });
    }

    /**
     * Menghapus komponen yang tidak digunakan dari DOM
     * @private
     * @param {Array<ProcessedRoute>} routes - Daftar route yang sedang aktif
     */
    _remove(routes) {
        const outlets = [...document.body.querySelectorAll("md-outlet")];

        for (const outlet of outlets) {
            let nextElement = outlet.nextElementSibling;

            while (nextElement) {
                if (!outlets.find((outlet) => nextElement === outlet) && !routes.find((route) => nextElement === route.component)) {
                    nextElement.remove();
                }

                nextElement = nextElement.nextElementSibling;
            }
        }
    }

    /**
     * Me-render component ke dalam outlet yang sesuai
     * @private
     * @param {ProcessedRoute} route - Route yang akan di-render
     * @returns {Promise<void>}
     * @throws {Error} Jika load() tidak di-set atau component tidak tersedia
     */
    async _render(route) {
        if (!route.component) {
            if (!route.load) {
                throw new Error("load() not yet set");
            }

            route.component = await route.load();
        }

        const container = route.parent?.component || document.body;
        const outlet = await this._getOutlet(container, route.outlet);

        if (!route.component) {
            throw new Error("component not yet set");
        }

        if (!route.component.isConnected) {
            outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
        }
    }

    /**
     * Membangun object query dari string search
     * @private
     * @param {string} search - Query string (format: ?key=value)
     * @returns {Object.<string, string|Array<string>>} Object query
     * @example
     * _buildQuery("?foo=bar&foo=baz") // returns { foo: ["bar", "baz"] }
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
     * Memproses request URL dan mengupdate path & query
     * @private
     * @param {Event} event - Event object
     */
    _handleRequest() {
        let pathname;
        let search;

        if (this.options.historyApiFallback) {
            pathname = window.location.pathname;
            search = window.location.search;
        } else {
            [, pathname = "/", , search = ""] = window.location.hash.match(/^#?([^\?]+)(\?(.*))?$/) || [];
        }

        this.path = this._normalizePathname(pathname);
        this.query = this._buildQuery(search);
    }

    /**
     * Menormalisasi pathname (menghapus slash ganda)
     * @private
     * @param {string} pathname - Path yang akan dinormalisasi
     * @returns {string} Path yang sudah dinormalisasi
     */
    _normalizePathname(pathname) {
        return pathname
            .replace(/\/+/g, "/")
            .replace(/(?!^)\//g, "/")
            .replace(/(?<!^)\/$/, "");
    }

    /**
     * Membangun array key-value untuk URLSearchParams dari object query
     * @private
     * @param {Object.<string, string|Array<string>>} query - Object query
     * @returns {Array<[string, string]>} Array key-value pairs
     */
    _buildQueryMap(query) {
        return Object.entries(query).reduce((prev, [name, value]) => {
            if (Array.isArray(value)) {
                value.forEach((val) => {
                    prev.push([name, val]);
                });
            } else {
                prev.push([name, value]);
            }
            return prev;
        }, []);
    }

    /**
     * Navigasi ke path tertentu
     * @param {string} path - Tujuan navigasi
     * @param {Object.<string, string|Array<string>>} [query={}] - Query parameters
     * @example
     * router.navigate("/users", { page: 1, sort: "asc" });
     * router.navigate("/users/123");
     */
    navigate(path, query = {}) {
        const pathname = path.replace(/^#/, "").replace(/^([^\/])/, "/$1") || "/";
        const searchParams = new URLSearchParams(this._buildQueryMap(query));
        const search = searchParams.size > 0 ? `?${searchParams.toString()}` : "";
        const url = this._normalizePathname(pathname) + search;

        if (this.options.historyApiFallback) {
            window.history.pushState({}, null, url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * Handler untuk klik pada elemen dengan atribut routerLink
     * @private
     * @param {Event} event - Click event
     */
    _handleNavigate(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (!routerLink) return;

        const path = routerLink.getAttribute("routerLink");
        this.navigate(path);
    }

    /**
     * Memicu custom event
     * @private
     * @param {string} type - Tipe event
     * @param {*} detail - Data yang akan dikirim
     */
    _emit(type, detail = this) {
        const event = new CustomEvent(type, {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    /**
     * Memulai listener router
     * @listens DOMContentLoaded
     * @listens popstate
     * @listens hashchange
     * @listens click
     */
    listen() {
        window.addEventListener("DOMContentLoaded", (event) => this._handleChange(event));

        if (this.options.historyApiFallback) {
            const pushState = window.history.pushState;
            const instance = this;
            window.history.pushState = function () {
                pushState.apply(this, arguments);
                instance._emit("popstate", {});
            };

            window.addEventListener("popstate", (event) => this._handleChange(event));
        } else {
            window.addEventListener("hashchange", (event) => this._handleChange(event));
        }

        window.addEventListener("click", (event) => this._handleNavigate(event));
    }
}

export { Router };
