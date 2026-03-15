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

    constructor() {
        super();

        this.value = "on";
    }

    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }

    formResetCallback() {
        this.checkboxNative.indeterminate = this._snapshot.indeterminate;
        this.checkboxNative.checked = this._snapshot.checked;

        this.indeterminate = this._snapshot.indeterminate;
        this.checked = this._snapshot.checked;
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

        this.classList.add("md-checkbox");

        this._snapshot = {
            indeterminate: this.indeterminate,
            checked: this.checked,
        };
    }
}

customElements.define("md-checkbox", MDCheckbox);

export { MDCheckbox };
