import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { RippleController } from "../ripple/ripple.js";

class MDFab extends MDComponent {
    static properties={
        variant:{type:String},
        color:{type:String},
        icon:{type:String},
    }

    variants=[
        'medium',
        'large',
    ]

    colors=[
        'primary-container',
        'secondary-container',
        'tertiary-container',
        'primary',
        'secondary',
        'tertiary',
    ]

    ripple = new RippleController(this, {
    });

    constructor(){
        super()
        this.color='primary-container'
    }

    render(){
        /* prettier-ignore */
        return html`
            <md-icon class="md-fab__icon">${this.icon}</md-icon>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab");
    }

    _applyVariantClass() {
        this.variants.forEach((variant) => {
            if (this.variant === variant) {
                this.classList.add(`md-fab--${variant}`);
            } else {
                this.classList.remove(`md-fab--${variant}`);
            }
        });
    }


    _applyColorClass() {
        this.colors.forEach((color) => {
            if (this.color === color) {
                this.classList.add(`md-fab--${color}`);
            } else {
                this.classList.remove(`md-fab--${color}`);
            }
        });
    }


    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this._applyVariantClass();
        }

        if (_changedProperties.has("color")) {
            this._applyColorClass();
        }

    }
}

customElements.define("md-fab", MDFab);

export { MDFab };
