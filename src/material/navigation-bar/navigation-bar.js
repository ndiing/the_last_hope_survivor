import { html } from "lit";
import { MDComponent } from "../component/component.js";

class MDNavigationBar extends MDComponent {
    static properties = {
        items: { type: Array },
        layout: { type: String },
    };

    layouts = ["vertical", "horizontal"];

    get ripple() {
        if (this.layout === "vertical") {
            return { container: ".md-list__leading-item--icon" };
        } else if (this.layout === "horizontal") {
            return {};
        }
    }

    constructor() {
        super();
        this.items = [];
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-list 
                class="md-navigation-bar__list"
                .items="${this.items}"
                selection
                mode="single-select"
                .ripple="${this.ripple}"
            ></md-list>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("layout")) {
            this.layouts.forEach((layout) => {
                if (layout === this.layout) {
                    this.classList.add(`md-navigation-bar--${layout}`);
                } else {
                    this.classList.remove(`md-navigation-bar--${layout}`);
                }
            });
        }
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
