import { MDComponent } from "../component/component.js";

class MDLayoutItem extends MDComponent {
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

        this.classList.add("md-layout__item");

        this.scrimElement = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);

        this._handleScrimClose = this._handleScrimClose.bind(this);
        this.scrimElement.addEventListener("scrimClose", this._handleScrimClose);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout__item");

        this.scrimElement.removeEventListener("scrimClose", this._handleScrimClose);
        this.scrimElement.remove();

        this.scrimElement = null;
    }

    _updateRegionClass() {
        this.regions.forEach((region) => {
            if (this.region === region) {
                this.classList.add(`md-layout__item--${region}`);
            } else {
                this.classList.remove(`md-layout__item--${region}`);
            }
        });
    }

    _updateOpenClass() {
        if (this.open) {
            this.classList.add(`md-layout__item--open`);

            if (this.modal) {
                this.scrimElement.show();
            }
        } else {
            this.classList.remove(`md-layout__item--open`);

            this.scrimElement.close();
        }
    }

    _updateModalClass() {
        if (this.modal) {
            this.classList.add(`md-layout__item--modal`);
        } else {
            this.classList.remove(`md-layout__item--modal`);
        }
    }

    _updateMarginClass() {
        if (this.margin) {
            this.classList.add(`md-layout__item--margin`);
        } else {
            this.classList.remove(`md-layout__item--margin`);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("region")) {
            this._updateRegionClass();
        }

        if (_changedProperties.has("open")) {
            this._updateOpenClass();
        }

        if (_changedProperties.has("modal")) {
            this._updateModalClass();
        }

        if (_changedProperties.has("margin")) {
            this._updateMarginClass();
        }
    }

    show() {
        this.open = true;

        this.emit("layoutItemShow", {});
    }

    close() {
        this.open = false;

        this.emit("layoutItemClose", {});
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-layout-item", MDLayoutItem);

export { MDLayoutItem };
