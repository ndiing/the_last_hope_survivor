import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple.js";

class MDCheckbox extends MDComponent {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
    };

    ripple = new RippleController(this, {
        container: ".md-checkbox__container",
        trigger: ".md-checkbox__native",
        radius: 40,
        unbounded: true,
    });

    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }

    constructor() {
        super();

        this.value = "on";
    }

    formResetCallback() {
        this.checkboxNative.indeterminate = this._snapshot.indeterminate;
        this.checkboxNative.checked = this._snapshot.checked;

        this.indeterminate = this.checkboxNative.indeterminate;
        this.checked = this.checkboxNative.checked;
    }

    _handleCheckboxNativeInput(event) {
        this.checked = this.checkboxNative.checked;

        this.emit("checkboxNativeInput", { event });
    }

    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-checkbox__native"
                type="checkbox" 
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                checked="${ifDefined(this.checked)}"
                @input="${this._handleCheckboxNativeInput}"
            >
            <div class="md-checkbox__container">
                <div class="md-checkbox__icon"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this._snapshot = {
            indeterminate: this.indeterminate,
            checked: this.checked,
        };

        this.classList.add("md-checkbox");
    }
}

customElements.define("md-checkbox", MDCheckbox);

export { MDCheckbox };
