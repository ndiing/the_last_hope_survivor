import { html, notEqual, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { Ripple } from "../ripple/ripple.js";

class MDButton extends MDComponent {
    static properties = {
        icon: { type: String },
        label: { type: String },
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        type: { type: String },
        selected: { type: Boolean, reflect: true },
    };

    variants = ["default", "toggle"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    shapes = ["round", "square"];
    colors = ["elevated", "filled", "tonal", "outlined", "text"];

    constructor() {
        super();
        this.variant = "default";
        this.size = "small";
        this.shape = "round";
        this.color = "filled";
        this.type = "button";
        this._ripple = new Ripple(this, { trigger: ".md-button__native" });
    }

    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" type="${this.type}"></button>
            ${this.icon?html`<md-icon class="md-button__icon">${this.icon}</md-icon>`:nothing}
            ${this.label?html`<div class="md-button__label">${this.label}</div>`:nothing}
        `
    }

    _handleButtonClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;
            this.emit("buttonSelected", { event });
        }
        this.emit("buttonClick", { event });
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");

        this._handleButtonClick = this._handleButtonClick.bind(this);
        this.addEventListener("click", this._handleButtonClick);

        await this.updateComplete;

        this._ripple.init();
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-button");

        this.removeEventListener("click", this._handleButtonClick);

        await this.updateComplete;

        this._ripple.destroy();
    }

    _updateVariantClass() {
        this.variants.forEach((variant) => {
            if (variant === this.variant) {
                this.classList.add(`md-button--${variant}`);
            } else {
                this.classList.remove(`md-button--${variant}`);
            }
        });
    }
    _updateSizeClass() {
        this.sizes.forEach((size) => {
            if (size === this.size) {
                this.classList.add(`md-button--${size}`);
            } else {
                this.classList.remove(`md-button--${size}`);
            }
        });
    }
    _updateShapeClass() {
        this.shapes.forEach((shape) => {
            if (shape === this.shape) {
                this.classList.add(`md-button--${shape}`);
            } else {
                this.classList.remove(`md-button--${shape}`);
            }
        });
    }
    _updateColorClass() {
        this.colors.forEach((color) => {
            if (color === this.color) {
                this.classList.add(`md-button--${color}`);
            } else {
                this.classList.remove(`md-button--${color}`);
            }
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this._updateVariantClass();
        }
        if (_changedProperties.has("size")) {
            this._updateSizeClass();
        }
        if (_changedProperties.has("shape")) {
            this._updateShapeClass();
        }
        if (_changedProperties.has("color")) {
            this._updateColorClass();
        }
    }
}

customElements.define("md-button", MDButton);

export { MDButton };
