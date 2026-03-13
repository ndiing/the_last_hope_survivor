import { MDComponent } from "../component/component.js";

class MDScrim extends MDComponent {
    static properties = {
        open: { type: Boolean },
    };

    _handleClick(event) {
        this.close();
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");

        this._handleClick = this._handleClick.bind(this);
        this.addEventListener("click", this._handleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-scrim");
        this.removeEventListener("click", this._handleClick);
    }

    _applyOpenClass() {
        if (this.open) {
            this.classList.add(`md-scrim--open`);
            this.emit("scrimShow");
        } else {
            this.classList.remove(`md-scrim--open`);
            this.emit("scrimClose");
        }
    }

    updated(_changedProperties) {
        if (_changedProperties.has("open")) {
            this._applyOpenClass();
        }
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }

    toggle() {
        this.open = !this.open;
    }
}

customElements.define("md-scrim", MDScrim);

export { MDScrim };
