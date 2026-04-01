import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { RippleController } from "../ripple/ripple.js";

class MDIconButton extends MDComponent {
    static properties = {
        icon: {
            type: String,
            converter: (value, type) => {
                try {
                    return JSON.parse(value);
                } catch (error) {
                    return [value, value];
                }
            },
        },
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        width: { type: String },
        selected: { type: Boolean, reflect: true },
    };

    variants = ["default", "toggle"];

    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    shapes = ["round", "square"];

    colors = ["filled", "tonal", "outlined", "standard"];

    widths = ["default", "narrow", "wide"];

    rippleController = new RippleController(this, {});

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
            <md-icon 
                class="md-icon-button__native"
            >${this.icon[~~this.selected]}</md-icon>
        `
    }

    _handleIconButtonClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;
        }

        this.emit("_handleIconButtonClick", { event });
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this._handleIconButtonClick = this._handleIconButtonClick.bind(this);
        this.addEventListener("click", this._handleIconButtonClick);
    }

    _updateVariantClass() {
        this.variants.forEach((variant) => {
            if (variant === this.variant) {
                this.classList.add(`md-icon-button--${variant}`);
            } else {
                this.classList.remove(`md-icon-button--${variant}`);
            }
        });
    }

    _updateSizeClass() {
        this.sizes.forEach((size) => {
            if (size === this.size) {
                this.classList.add(`md-icon-button--${size}`);
            } else {
                this.classList.remove(`md-icon-button--${size}`);
            }
        });
    }

    _updateShapeClass() {
        this.shapes.forEach((shape) => {
            if (shape === this.shape) {
                this.classList.add(`md-icon-button--${shape}`);
            } else {
                this.classList.remove(`md-icon-button--${shape}`);
            }
        });
    }

    _updateColorClass() {
        this.colors.forEach((color) => {
            if (color === this.color) {
                this.classList.add(`md-icon-button--${color}`);
            } else {
                this.classList.remove(`md-icon-button--${color}`);
            }
        });
    }

    _updateWidthClass() {
        this.widths.forEach((width) => {
            if (width === this.width) {
                this.classList.add(`md-icon-button--${width}`);
            } else {
                this.classList.remove(`md-icon-button--${width}`);
            }
        });
    }

    _updateSelectedClass() {
        if (this.selected) {
            this.classList.add(`md-icon-button--selected`);
        } else {
            this.classList.remove(`md-icon-button--selected`);
        }
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
        if (_changedProperties.has("width")) {
            this._updateWidthClass();
        }
        if (_changedProperties.has("selected")) {
            this._updateSelectedClass();
        }
    }
}

customElements.define("md-icon-button", MDIconButton);

export { MDIconButton };
