import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple.js";

class MDRadioButton extends MDComponent {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean },
    };

    ripple = new RippleController(this, {
        container: ".md-radio-button__container",
        trigger: ".md-radio-button__native",
        radius: 40,
        unbounded: true,
    });

    constructor() {
        super();

        this.value = "on";
    }

    get radioButtonNative() {
        return this.querySelector(".md-radio-button__native");
    }

    formResetCallback() {
        this.radioButtonNative.checked = this._snapshot.checked;

        this.checked = this._snapshot.checked;
    }

    _handleCheckboxNativeInput(event) {
        this.checked = this.radioButtonNative.checked;

        this.emit("radioButtonNativeInput", { event });
    }

    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-radio-button__native"
                type="radio" 
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                checked="${ifDefined(this.checked)}"
                @input="${this._handleCheckboxNativeInput}"
            >
            <div class="md-radio-button__container">
                <div class="md-radio-button__icon"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-radio-button");

        this._snapshot = {
            checked: this.checked,
        };
    }
}

customElements.define("md-radio-button", MDRadioButton);

export { MDRadioButton };
