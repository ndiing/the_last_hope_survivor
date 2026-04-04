import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { Ripple } from "../ripple/ripple.js";

class MDSwitch extends MDComponent {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean },
        icons: { type: Array },
        tabindex: { type: Number },
    };

    switchNative = createRef();

    constructor() {
        super();
        this._ripple = new Ripple(this, {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-switch__native",
            container: ".md-switch__handle",
        });
    }

    formResetCallback() {
        this.checked = this._snapshot.checked;

        this.switchNative.value.checked = this.checked;
    }

    _handleSwitchNativeInput(event) {
        this.checked = this.switchNative.value.checked;

        this.emit("switchNativeInput", { event });
    }

    get _icon() {
        if (!Array.isArray(this.icons)) {
            return null;
        }
        return this.icons[~~this.checked];
    }

    render() {
        /* prettier-ignore */
        return html`
            <input 
                tabindex="${ifDefined(this.tabindex)}"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .checked="${ifDefined(this.checked)}"
                type="checkbox" 
                class="md-switch__native"
                ${ref(this.switchNative)}
                @input="${this._handleSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__handle">${this._icon?html`<md-icon class="md-switch__icon">${this._icon}</md-icon>`:nothing}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-switch");

        this._snapshot = {
            checked: this.checked,
        };

        this._ripple.init();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-switch");

        this._ripple.destroy();
    }
}

customElements.define("md-switch", MDSwitch);

export { MDSwitch };
