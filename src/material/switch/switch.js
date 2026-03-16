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
        icons: {
            type: Array,
            converter: (value, type) => {
                if (typeof value === "string") {
                    return JSON.parse(value);
                } else {
                    return value;
                }
            },
        },
    };

    ripple = new RippleController(this, {
        container: ".md-switch__thumb",
        trigger: ".md-switch__native",
        radius: 40,
        unbounded: true,
        centered: true,
    });

    get icon() {
        return this.icons[~~this.checked];
    }

    constructor() {
        super();

        this.value = "on";
        this.icons = [];
    }

    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    formResetCallback() {
        this.switchNative.checked = this._snapshot.checked;

        this.checked = this._snapshot.checked;
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
                <div class="md-switch__thumb">${this.icon?html`<md-icon class="md-switch__icon">${this.icon}</md-icon>`:nothing}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-switch");

        this._snapshot = {
            checked: this.checked,
        };
    }
}

customElements.define("md-switch", MDSwitch);

export { MDSwitch };
