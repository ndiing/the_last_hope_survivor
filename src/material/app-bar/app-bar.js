import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDPaneHeader } from "../pane/pane-header.js";

class MDAppBar extends MDPaneHeader {
    static properties = {
        variant: { type: String },
        leading: { type: Array },
        headline: { type: String },
        subtitle: { type: String },
        trailing: { type: Array },
    };

    variants = ["small", "medium", "large"];

    constructor() {
        super();

        this.variant = "small";
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.leading?.length?html`<md-toolbar class="md-app-bar__toolbar" .items="${this.leading}"></md-toolbar>`:nothing}
            ${this.headline||this.subtitle?html`
                <div class="md-app-bar__content">
                    ${this.headline?html`<div class="md-app-bar__headline">${this.headline}</div>`:nothing}
                    ${this.subtitle?html`<div class="md-app-bar__subtitle">${this.subtitle}</div>`:nothing}
                </div>
            `:nothing}
            ${this.trailing?.length?html`<md-toolbar class="md-app-bar__toolbar" .items="${this.trailing}"></md-toolbar>`:nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-app-bar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                if (variant === this.variant) {
                    this.classList.add(`md-app-bar--${variant}`);
                } else {
                    this.classList.remove(`md-app-bar--${variant}`);
                }
            });
        }
    }
}

customElements.define("md-app-bar", MDAppBar);

export { MDAppBar };
