import { MDComponent } from "../component/component.js";

/**
 * @class
 * @fires scrimClick
 * @fires scrimShow
 * @fires scrimClose
 */
class MDScrim extends MDComponent {
    static properties = {
        open: { type: Boolean },
    };

    _handleScrimClick(event) {
        this.close();

        this.emit("scrimClick", { event });
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-scrim");

        this._handleScrimClick = this._handleScrimClick.bind(this);
        this.addEventListener("click", this._handleScrimClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-scrim");

        this.removeEventListener("click", this._handleScrimClick);
    }

    _updateOpenClass() {
        if (this.open) {
            this.classList.add(`md-scrim--open`);
        } else {
            this.classList.remove(`md-scrim--open`);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("open")) {
            this._updateOpenClass();
        }
    }

    show() {
        this.open = true;

        this.emit("scrimShow", {});
    }

    close() {
        this.open = false;

        this.emit("scrimClose", {});
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-scrim", MDScrim);

export { MDScrim };
