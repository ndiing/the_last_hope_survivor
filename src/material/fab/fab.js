import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { Ripple } from "../ripple/ripple.js";

class MDFab extends MDComponent {
    static properties = {
        icon: { type: String },
        variant: { type: String },
        color: { type: String },
        label: { type: String },
        unelevated: { type: Boolean },
    };

    variants = ["small", "medium", "large"];

    colors = ["primary-container", "secondary-container", "tertiary-container", "primary", "secondary", "tertiary"];

    constructor() {
        super();
        this.variant = "small";
        this.color = "primary-container";
        this._ripple = new Ripple(this, {});
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icon?html`<md-icon class="md-fab__icon">${this.icon}</md-icon>`:nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab");

        this._ripple.init();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-fab");

        this._ripple.destroy();
    }

    _updateExtendedClass() {
        if (this.label) {
            this.classList.add(`md-fab--extended`);
        } else {
            this.classList.remove(`md-fab--extended`);
        }
    }

    _updateUnelevatedClass() {
        if (this.unelevated) {
            this.classList.add(`md-fab--unelevated`);
        } else {
            this.classList.remove(`md-fab--unelevated`);
        }
    }

    _updateColorClass() {
        this.colors.forEach((color) => {
            if (color === this.color) {
                this.classList.add(`md-fab--${color}`);
            } else {
                this.classList.remove(`md-fab--${color}`);
            }
        });
    }

    _updateVariantClass() {
        this.variants.forEach((variant) => {
            if (variant === this.variant) {
                this.classList.add(`md-fab--${variant}`);
            } else {
                this.classList.remove(`md-fab--${variant}`);
            }
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this._updateVariantClass();
        }

        if (_changedProperties.has("color")) {
            this._updateColorClass();
        }

        if (_changedProperties.has("label")) {
            this._updateExtendedClass();
        }

        if (_changedProperties.has("unelevated")) {
            this._updateUnelevatedClass();
        }
    }
}

customElements.define("md-fab", MDFab);

export { MDFab };
