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
        this.interactive = true;
        this.selection = true;
        this.mode = "single-select";
        this.inputFormat = "flat";
    }

    _handleListItemClick() {
        this.style.removeProperty("--navigation-bar-item-selected-icon");
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-list 
                class="md-navigation-bar__list"                
                .items="${this.items}"
                .interactive="${this.interactive}"
                .selection="${this.selection}"
                .mode="${this.mode}"
                .inputFormat="${this.inputFormat}"
                .ripple="${this.ripple}"
                @listItemClick="${this._handleListItemClick}"
            ></md-list>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");

        this.style.setProperty("--navigation-bar-item-selected-icon", "none");
    }

    _updateLayoutClass() {
        this.layouts.forEach((layout) => {
            if (layout === this.layout) {
                this.classList.add(`md-navigation-bar--${layout}`);
            } else {
                this.classList.remove(`md-navigation-bar--${layout}`);
            }
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("layout")) {
            this._updateLayoutClass();
        }
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
