import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDForm extends MDComponent {
    static properties = {
        acceptCharset: { type: String }, //"UTF-8"
        action: { type: String }, //"/"
        autocomplete: { type: String }, //"off"
        // elements: {type:String},
        // encoding: {type:String},//"application/x-www-form-urlencoded"
        enctype: { type: String }, //"application/x-www-form-urlencoded"
        // length: {type:String},
        method: { type: String }, //"post"
        name: { type: String },
        noValidate: { type: Boolean }, //true
        // rel: {type:String},
        // relList: {type:String},
        target: { type: String },
    };

    constructor() {
        super();

        this.acceptCharset = "UTF-8";
        this.action = "/";
        this.autocomplete = "off";
        this.enctype = "application/json";
        this.method = "post";
        // this.name=''
        this.noValidate = true;
        // this.target=''

        this._childNodes = Array.from(this.childNodes);
        this.innerHTML = "";
    }

    get formNative() {
        return this.querySelector(".md-form__native");
    }

    _handleFormNativedata(event) {
        console.debug(JSON.stringify([...event.formData.entries()], null, 2));

        this.emit("formNativeData", { event });
    }

    _handleNativeReset(event) {
        this.emit("formNativeReset", { event });
    }

    _handleNativeSubmit(event) {
        event.preventDefault();

        new FormData(this.formNative);

        this.emit("formNativeSubmit", { event });
    }

    render() {
        /* prettier-ignore */
        return html`
            <form
                class="md-form__native"
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .noValidate="${ifDefined(this.noValidate)}"
                .target="${ifDefined(this.target)}"
                @formdata="${this._handleFormNativedata}"
                @reset="${this._handleNativeReset}"
                @submit="${this._handleNativeSubmit}"
            >${this._childNodes}</form>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    reset() {
        this.formNative.reset();
    }

    submit(submitButton) {
        const formNative = this.formNative;

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
