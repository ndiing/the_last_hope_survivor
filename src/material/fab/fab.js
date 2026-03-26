import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { RippleController } from "../ripple/ripple.js";

class MDFab extends MDComponent {
    static properties={
        variant:{type:String},
        color:{type:String},
        icon:{type:String},
        label:{type:String},
    }

    variants=[
        'medium',
        'large',
        // 'small-extended',
        // 'medium-extended',
        // 'large-extended',
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
            ${this.icon?html`<md-icon class="md-fab__icon">${this.icon}</md-icon>`:nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
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

    _applyExtendedClass(){
        if(this.label){
            this.classList.add('md-fab--extended')
        }else{
            this.classList.remove('md-fab--extended')
        }
    }


    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this._applyVariantClass();
        }

        if (_changedProperties.has("color")) {
            this._applyColorClass();
        }

        if (_changedProperties.has("label")) {
            this._applyExtendedClass();
        }

    }
}

customElements.define("md-fab", MDFab);

export { MDFab };
