import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDTextField extends MDComponent {
    static formAssociated = true;

    static properties = {
        label: { type: String },
        leadingIcons: { type: Array },
        prefix: { type: String },

        placeholder: { type: String },
        required: { type: Boolean },
        minLength: { type: Number },
        maxLength: { type: Number },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        type: { type: String },
        pattern: { type: String },
        name: { type: String },
        value: { type: String },

        suffix: { type: String },
        trailingIcons: { type: Array },
        supportingText: { type: String },
        characterCounter: { type: String },

        variant: { type: String },
        adjacentLabel: { type: Boolean },
        validationMessage: { type: String },
        shape: { type: String },
    };

    variants = ["standard", "filled", "outlined"];

    shapes = ["round", "square"];

    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    constructor() {
        super();

        this.type = "text";
        // this.name=''
        this.value = "";
    }

    formResetCallback() {
        this.textFieldNative.value = this._snapshot.value;

        this.value = this.textFieldNative.value;
        this.validationMessage = "";
    }

    _handleTextFieldNativeFocus(event) {
        this.classList.add("md-text-field--focus");

        this.emit("textFieldNativeFocus", { event });
    }

    _handleTextFieldNativeBlur(event) {
        this.classList.remove("md-text-field--focus");

        this.emit("textFieldNativeBlur", { event });
    }

    _handleTextFieldNativeInput(event) {
        this.value = this.textFieldNative.value;

        this.emit("textFieldNativeInput", { event });
    }

    _handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.validationMessage = this.textFieldNative.validationMessage;

        this.emit("textFieldNativeInvalid", { event });
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.label?html`<div class="md-text-field__label">${this.label}</div>`:nothing}
            <div class="md-text-field__container">
                ${this.leadingIcons?html`<div class="md-text-field__leading-icons">${this.leadingIcons.map(icon=>html`<md-icon class="md-text-field__icon">${icon}</md-icon>`)}</div>`:nothing}
                ${this.prefix?html`<div class="md-text-field__prefix">${this.prefix}</div>`:nothing}
                <input 
                    class="md-text-field__native"
                    placeholder="${ifDefined(this.placeholder)}" 
                    required="${ifDefined(this.required)}" 
                    minLength="${ifDefined(this.minLength)}" 
                    maxLength="${ifDefined(this.maxLength)}" 
                    min="${ifDefined(this.min)}" 
                    max="${ifDefined(this.max)}" 
                    step="${ifDefined(this.step)}" 
                    type="${ifDefined(this.type)}" 
                    pattern="${ifDefined(this.pattern)}" 
                    name="${ifDefined(this.name)}" 
                    value="${ifDefined(this.value)}" 
                    @focus="${this._handleTextFieldNativeFocus}"
                    @blur="${this._handleTextFieldNativeBlur}"
                    @input="${this._handleTextFieldNativeInput}"
                    @invalid="${this._handleTextFieldNativeInvalid}"
                >
                ${this.suffix?html`<div class="md-text-field__suffix">${this.suffix}</div>`:nothing}
                ${this.trailingIcons?html`<div class="md-text-field__trailing-icons">${this.trailingIcons.map(icon=>html`<md-icon class="md-text-field__icon">${icon}</md-icon>`)}</div>`:nothing}
            </div>
            <div class="md-text-field__information">
                ${this.validationMessage||this.supportingText?html`<div class="md-text-field__supporting-text">${this.validationMessage||this.supportingText}</div>`:nothing}
                ${this.characterCounter?html`<div class="md-text-field__character-counter">${this.characterCounter}</div>`:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        this._snapshot = {
            value: this.value,
        };

        await this.updateComplete;

        const offsetLeft = this.querySelector(".md-text-field__prefix, .md-text-field__native").offsetLeft;
        this.style.setProperty("--md-comp-text-field-native-offset-left", offsetLeft + "px");
    }

    _applyVariantClass() {
        this.variants.forEach((variant) => {
            if (this.variant === variant) {
                this.classList.add(`md-text-field--${variant}`);
            } else {
                this.classList.remove(`md-text-field--${variant}`);
            }
        });
    }

    _applyShapeClass() {
        this.shapes.forEach((shape) => {
            if (this.shape === shape) {
                this.classList.add(`md-text-field--${shape}`);
            } else {
                this.classList.remove(`md-text-field--${shape}`);
            }
        });
    }

    _applyAdjacentLabelClass() {
        if (this.adjacentLabel) {
            this.classList.add(`md-text-field--adjacent-label`);
        } else {
            this.classList.remove(`md-text-field--adjacent-label`);
        }
    }

    _applyLabelClass() {
        if (this.label) {
            this.classList.add(`md-text-field--label`);
        } else {
            this.classList.remove(`md-text-field--label`);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this._applyVariantClass();
        }

        if (_changedProperties.has("shape")) {
            this._applyShapeClass();
        }

        if (_changedProperties.has("adjacentLabel")) {
            this._applyAdjacentLabelClass();
        }

        if (_changedProperties.has("label")) {
            this._applyLabelClass();
        }

        if (_changedProperties.has("value")) {
            this.classList.toggle("md-text-field--populated", !!this.value);
        }

        if (_changedProperties.has("validationMessage")) {
            this.classList.toggle("md-text-field--error", !!this.validationMessage);
        }
    }
}

customElements.define("md-text-field", MDTextField);

export { MDTextField };
