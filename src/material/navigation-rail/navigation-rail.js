import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

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

    _handleListItemClick() {
        this.style.removeProperty("--navigation-rail-item-selected-icon");
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.iconButton?html`
                <md-icon-button
                    .icon="${ifDefined(this.iconButton.icon)}"
                    .variant="${ifDefined(this.iconButton.variant)}"
                    .size="${ifDefined(this.iconButton.size)}"
                    .shape="${ifDefined(this.iconButton.shape)}"
                    color="standard"
                    .width="${ifDefined(this.iconButton.width)}"
                    .selected="${this.expanded}"
                    @click="${this.toggle}"
                ></md-icon-button>
            `:nothing}
            ${this.fab?html`
                <md-fab
                    .icon="${ifDefined(this.fab.icon)}"
                    .variant="${ifDefined(this.fab.variant)}"
                    color="secondary-container"
                    .label="${this.expanded&&this.fab.label}"
                    unelevated
                ></md-fab>
            `:nothing}
            <md-list 
                class="md-navigation-rail__list"
                .items="${this.items}"
                selection
                mode="single-select"
                .ripple="${this.ripple}"
                @listItemClick="${this._handleListItemClick}"
            ></md-list>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");

        this.style.setProperty("--navigation-rail-item-selected-icon", "none");
    }

    _updateExpandedClass() {
        if (this.expanded) {
            this.classList.add(`md-navigation-rail--expanded`);
        } else {
            this.classList.remove(`md-navigation-rail--expanded`);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("expanded")) {
            this._updateExpandedClass();
        }
    }

    expand() {
        this.expanded = true;
    }

    collapse() {
        this.expanded = false;
    }

    toggle() {
        if (this.expanded) {
            this.collapse();
        } else {
            this.expand();
        }
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
