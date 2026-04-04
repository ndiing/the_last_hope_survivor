import { html } from "lit";
import { MDComponent } from "../component/component.js";

/* @todo build fab first */

class MDNavigationRail extends MDComponent {
    static properties = {
        iconButton: { type: Object },
        fab: { type: Object },
        items: { type: Array },
        expanded: { type: Boolean },
    };

    get ripple() {
        if (this.expanded) {
            return {};
        } else {
            return { container: ".md-list__leading-item--icon" };
        }
    }

    constructor() {
        super();
        this.items = [];
        this.expanded = false;
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-list 
                class="md-navigation-rail__list"
                .items="${this.items}"
                selection
                mode="single-select"
                .ripple="${this.ripple}"
            ></md-list>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("expanded")) {
            if (this.expanded) {
                this.classList.add(`md-navigation-rail--expanded`);
            } else {
                this.classList.remove(`md-navigation-rail--expanded`);
            }
        }
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
