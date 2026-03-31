import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDForm extends MDComponent {
    static properties = {
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        encoding: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        noValidate: { type: Boolean },
    };

    constructor() {
        super();

        this.method = "post";

        this._childNodes = Array.from(this.childNodes);
        this.replaceChildren();
    }

    _handleFormNativeReset(event) {
        this.emit("formNativeReset", { event });
    }

    formNative = createRef();

    _handleFormNativeSubmit(event) {
        event.preventDefault();

        new FormData(this.formNative.value);

        this.emit("formNativeSubmit", { event });
    }

    _handleFormNativeFormdata(event) {
        console.debug("[_handleFormNativeFormdata]", JSON.stringify([...event.formData.entries()], null, 2));

        this.emit("formNativeFormdata", { event });
    }

    render() {
        /* prettier-ignore */
        return html`
            <form 
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .encoding="${ifDefined(this.encoding)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .noValidate="${ifDefined(this.noValidate)}"
                class="md-form__native"
                ${ref(this.formNative)}
                @reset="${this._handleFormNativeReset}"
                @submit="${this._handleFormNativeSubmit}"
                @formdata="${this._handleFormNativeFormdata}"
            >${this._childNodes}</form>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    reset() {
        this.formNative.value.reset();
    }

    submit(submitButton) {
        let formNative = this.formNative.value;

        if (formNative.requestSubmit) {
            if (submitButton) {
                formNative.requestSubmit(submitButton);
            } else {
                formNative.requestSubmit();
            }
        } else {
            formNative.submit();
        }
    }
}

customElements.define("md-form", MDForm);

export { MDForm };
