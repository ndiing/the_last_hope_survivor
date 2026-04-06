class Observer {
    constructor(callback = () => {}) {
        this.callback = callback;
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange() {
        this.unobserve();
        this.observe();
    }

    observe(list) {
        if (!this.list) {
            this.list = list.map((item) => ({ ...item, mql: window.matchMedia(item.query) }));
        }

        this.item = this.list.find((item) => item.mql.matches);

        this.callback(this.item);

        this.item.mql.addEventListener("change", this._handleChange);
    }

    unobserve() {
        if (this.item) {
            this.item.mql.removeEventListener("change", this._handleChange);
        }
    }
}

class BreakpointObserver extends Observer {
    observe(
        list = [
            { name: "expanded", query: "(min-width: 840px)" },
            { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
            { name: "compact", query: "(max-width: 599px)" },
        ],
    ) {
        super.observe(list);
    }
}
class ColorObserver extends Observer {
    observe(
        list = [
            { name: "light", query: "(prefers-color-scheme: light)" },
            { name: "dark", query: "(prefers-color-scheme: dark)" },
        ],
    ) {
        super.observe(list);
    }
}

export { Observer, BreakpointObserver, ColorObserver };
