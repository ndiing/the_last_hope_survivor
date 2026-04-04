class Breakpoint {
    constructor(callback = () => {}) {
        this.callback = callback;
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange() {
        this.unobserve();
        this.observe();
    }

    _buildList(list) {
        if (!this.list) {
            this.list = list.map((item) => ({ ...item, mql: window.matchMedia(item.query) }));
        }
    }

    observe(
        list = [
            { name: "expanded", query: "(min-width: 840px)" },
            { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
            { name: "compact", query: "(max-width: 599px)" },
        ],
    ) {
        this._buildList(list);

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

export { Breakpoint };
