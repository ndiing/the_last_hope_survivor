import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { RippleController } from "../ripple/ripple.js";

class MDIconButton extends MDComponent {
    static properties = {
        icon: { type: String },
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        width: { type: String },
        selected: { type: Boolean },
    };

    variants = ["default", "toggle"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    shapes = ["round", "square"];
    colors = ["filled", "tonal", "outlined", "standard"];
    widths = ["default", "narrow", "wide"];

    ripple = new RippleController(this);

    constructor() {
        super();

        this.variant = "default";
        this.size = "small";
        this.shape = "round";
        this.color = "filled";
        this.width = "default";
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-icon class="md-icon-button__native">${this.icon}</md-icon>
        `
    }

    _handleClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;
        }
        this.emit("iconButtonClick", { event });
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this._handleClick = this._handleClick.bind(this);
        this.addEventListener("click", this._handleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon-button");

        this.removeEventListener("click", this._handleClick);
    }

    _applyVariantClass() {
        this.variants.forEach((variant) => {
            if (this.variant === variant) {
                this.classList.add(`md-icon-button--${variant}`);
            } else {
                this.classList.remove(`md-icon-button--${variant}`);
            }
        });
    }

    _applySizeClass() {
        this.sizes.forEach((size) => {
            if (this.size === size) {
                this.classList.add(`md-icon-button--${size}`);
            } else {
                this.classList.remove(`md-icon-button--${size}`);
            }
        });
    }

    _applyShapeClass() {
        this.shapes.forEach((shape) => {
            if (this.shape === shape) {
                this.classList.add(`md-icon-button--${shape}`);
            } else {
                this.classList.remove(`md-icon-button--${shape}`);
            }
        });
    }

    _applyColorClass() {
        this.colors.forEach((color) => {
            if (this.color === color) {
                this.classList.add(`md-icon-button--${color}`);
            } else {
                this.classList.remove(`md-icon-button--${color}`);
            }
        });
    }

    _applyWidthClass() {
        this.widths.forEach((width) => {
            if (this.width === width) {
                this.classList.add(`md-icon-button--${width}`);
            } else {
                this.classList.remove(`md-icon-button--${width}`);
            }
        });
    }

    _applySelectedClass() {
        if (this.selected) {
            this.classList.add(`md-icon-button--selected`);
        } else {
            this.classList.remove(`md-icon-button--selected`);
        }
    }

    updated(_changedProperties) {
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
        if (_changedProperties.has("width")) {
            this._applyWidthClass();
        }
        if (_changedProperties.has("selected")) {
            this._applySelectedClass();
        }
    }
}

customElements.define("md-icon-button", MDIconButton);

export { MDIconButton };
