import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { RippleController } from "../ripple/ripple.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDButton extends MDComponent {
    static properties = {
        label: { type: String },
        icon: { type: String },
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        selected: { type: Boolean },
        type: { type: String },
    };

    variants = ["default", "toggle"];

    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    shapes = ["round", "square"];

    colors = ["elevated", "filled", "tonal", "outlined", "standard"];

    ripple = new RippleController(this, {
        trigger: ".md-button__native",
    });

    constructor() {
        super();

        this.variant = "default";
        this.size = "small";
        this.shape = "round";
        this.color = "filled";
        this.type = "button";
    }

    render() {
        /* prettier-ignore */
        return html`
            <button type="${ifDefined(this.type)}" class="md-button__native"></button>
            ${this.icon?html`<md-icon class="md-button__icon">${this.icon}</md-icon>`:nothing}
            ${this.label?html`<div class="md-button__label">${this.label}</div>`:nothing}
        `
    }

    _handleClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;
        }

        this.emit("buttonClick", { event });
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");

        this._handleClick = this._handleClick.bind(this);
        this.addEventListener("click", this._handleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.add("md-button");

        this.removeEventListener("click", this._handleClick);
    }

    _applyVariantClass() {
        this.variants.forEach((variant) => {
            if (this.variant === variant) {
                this.classList.add(`md-button--${variant}`);
            } else {
                this.classList.remove(`md-button--${variant}`);
            }
        });
    }

    _applySizeClass() {
        this.sizes.forEach((size) => {
            if (this.size === size) {
                this.classList.add(`md-button--${size}`);
            } else {
                this.classList.remove(`md-button--${size}`);
            }
        });
    }

    _applyShapeClass() {
        this.shapes.forEach((shape) => {
            if (this.shape === shape) {
                this.classList.add(`md-button--${shape}`);
            } else {
                this.classList.remove(`md-button--${shape}`);
            }
        });
    }

    _applyColorClass() {
        this.colors.forEach((color) => {
            if (this.color === color) {
                this.classList.add(`md-button--${color}`);
            } else {
                this.classList.remove(`md-button--${color}`);
            }
        });
    }

    _applySelectedClass() {
        if (this.selected) {
            this.classList.add(`md-button--selected`);
        } else {
            this.classList.remove(`md-button--selected`);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this._applyVariantClass();
        }

        if (_changedProperties.has("size")) {
            this._applySizeClass();
        }

        if (_changedProperties.has("shape")) {
            this._applyShapeClass();
        }

        if (_changedProperties.has("color")) {
            this._applyColorClass();
        }

        if (_changedProperties.has("selected")) {
            this._applySelectedClass();
        }
    }
}

customElements.define("md-button", MDButton);

export { MDButton };
