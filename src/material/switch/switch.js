import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple.js";

class MDSwitch extends MDComponent {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean },
        icons: { type: Array },
    };

    ripple = new RippleController(this, {
        container: ".md-switch__thumb",
        trigger: ".md-switch__native",
        radius: 40,
        unbounded: true,
        centered: true,
    });

    get _icon() {
        return this.icons[~~this.checked];
    }

    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    constructor() {
        super();

        this.value = "on";
        this.icons = [];
    }

    formResetCallback() {
        this.switchNative.checked = this._snapshot.checked;

        this.checked = this.switchNative.checked;
    }

    _handleCheckboxNativeInput(event) {
        this.checked = this.switchNative.checked;

        this.emit("switchNativeInput", { event });
    }

    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-switch__native"
                type="checkbox" 
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                checked="${ifDefined(this.checked)}"
                @input="${this._handleCheckboxNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb">${this._icon?html`<md-icon class="md-switch__icon">${this._icon}</md-icon>`:nothing}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this._snapshot = {
            checked: this.checked,
        };

        this.classList.add("md-switch");
    }
}

customElements.define("md-switch", MDSwitch);

export { MDSwitch };
