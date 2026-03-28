import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { RippleController } from "../ripple/ripple.js";

class MDCheckbox extends MDComponent {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean, reflect: true },
        tabindex: { type: Number },
    };

    rippleController = new RippleController(this, {
        centered: true,
        radius: 40,
        unbounded: true,
        trigger: ".md-checkbox__native",
        container: ".md-checkbox__container",
    });

    checkboxNative = createRef();

    formResetCallback() {
        this.indeterminate = this._snapshot.indeterminate;
        this.checked = this._snapshot.checked;

        this.checkboxNative.value.indeterminate = this.indeterminate;
        this.checkboxNative.value.checked = this.checked;
    }

    _handleCheckboxNativeInput(event) {
        this.indeterminate = this.checkboxNative.value.indeterminate;
        this.checked = this.checkboxNative.value.checked;

        this.emit("checkboxNativeInput", { event, component: this });
    }

    render() {
        /* prettier-ignore */
        return html`
            <input 
                tabindex="${ifDefined(this.tabindex)}"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                .disabled="${ifDefined(this.disabled)}"
                type="checkbox" 
                class="md-checkbox__native"
                ${ref(this.checkboxNative)}
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

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-checkbox", MDCheckbox);

export { MDCheckbox };
