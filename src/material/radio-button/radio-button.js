import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { Ripple } from "../ripple/ripple.js";

class MDRadioButton extends MDComponent {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean },
        disabled: { type: Boolean, reflect: true },
        tabindex: { type: Number },
    };

    radioButtonNative = createRef();

    constructor() {
        super();
        this.ripple = new Ripple(this, {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-radio-button__native",
            container: ".md-radio-button__container",
        });
    }

    formResetCallback() {
        this.checked = this._snapshot.checked;

        this.radioButtonNative.value.checked = this.checked;
    }

    _handleRadioButtonNativeInput(event) {
        this.checked = this.radioButtonNative.value.checked;

        this.emit("radioButtonNativeInput", { event });
    }

    render() {
        /* prettier-ignore */
        return html`
            <input 
                tabindex="${ifDefined(this.tabindex)}"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .checked="${ifDefined(this.checked)}"
                .disabled="${ifDefined(this.disabled)}"
                type="radio" 
                class="md-radio-button__native"
                ${ref(this.radioButtonNative)}
                @input="${this._handleRadioButtonNativeInput}"
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

        this._ripple.init();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-radio-button");

        this._ripple.destroy();
    }
}

customElements.define("md-radio-button", MDRadioButton);

export { MDRadioButton };
