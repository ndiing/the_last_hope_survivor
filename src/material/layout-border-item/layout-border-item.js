import { MDComponent } from "../component/component.js";

class MDLayoutBorderItem extends MDComponent {
    static properties = {
        region: { type: String },
        open: { type: Boolean },
        modal: { type: Boolean },
        margin: { type: Boolean },
    };

    regions = ["north", "west", "center", "east", "south"];

    _handleScrimClose() {
        this.close();
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout-border__item");

        this.scrimElement = document.createElement("md-scrim");
        document.body.append(this.scrimElement);

        this._handleScrimClose = this._handleScrimClose.bind(this);
        this.scrimElement.addEventListener("scrimClose", this._handleScrimClose);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout-border__item");

        this.scrimElement.removeEventListener("scrimClose", this._handleScrimClose);
        this.scrimElement.remove();

        this.scrimElement = null;
    }

    _applyModalClass() {
        if (this.modal) {
            this.classList.add(`md-layout-border__item--modal`);
        } else {
            this.classList.remove(`md-layout-border__item--modal`);
        }
    }

    _applyMarginClass() {
        if (this.margin) {
            this.classList.add(`md-layout-border__item--margin`);
        } else {
            this.classList.remove(`md-layout-border__item--margin`);
        }
    }

    _applyOpenClass() {
        if (this.open) {
            this.classList.add(`md-layout-border__item--open`);

            if (this.modal) {
                this.scrimElement.show();
            }

            this.emit("layoutBorderItemShow", { element: this });
        } else {
            this.classList.remove(`md-layout-border__item--open`);

            this.scrimElement.close();

            this.emit("layoutBorderItemClose", { element: this });
        }
    }

    _applyRegionClass() {
        this.regions.forEach((region) => {
            if (this.region === region) {
                this.classList.add(`md-layout-border__item--${region}`);
            } else {
                this.classList.remove(`md-layout-border__item--${region}`);
            }
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("region")) {
            this._applyRegionClass();
        }

        if (_changedProperties.has("open")) {
            this._applyOpenClass();
        }

        if (_changedProperties.has("modal")) {
            this._applyModalClass();
        }

        if (_changedProperties.has("margin")) {
            this._applyMarginClass();
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

customElements.define("md-layout-border-item", MDLayoutBorderItem);

export { MDLayoutBorderItem };
