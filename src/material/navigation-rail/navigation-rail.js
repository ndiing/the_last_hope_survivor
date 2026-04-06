import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDNavigationRail extends MDComponent {
    static properties = {
        iconButton: { type: Object },
        fab: { type: Object },
        items: { type: Array },
        expanded: { type: Boolean, reflect: true },
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
        this.interactive = true;
        this.selection = true;
        this.mode = "single-select";
        this.inputFormat = "flat";
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
                    class="md-navigation-rail__icon-button"
                    .icon="${ifDefined(this.iconButton.icon)}"
                    .variant="${ifDefined(this.iconButton.variant)}"
                    .size="${ifDefined(this.iconButton.size)}"
                    .shape="${ifDefined(this.iconButton.shape)}"
                    .color="${"standard"}"
                    .width="${ifDefined(this.iconButton.width)}"
                    .selected="${this.expanded}"
                    @click="${this.toggle}"
                ></md-icon-button>
            `:nothing}
            ${this.fab?html`
                <md-fab 
                    class="md-navigation-rail__fab"
                    .icon="${ifDefined(this.fab.icon)}"
                    .variant="${ifDefined(this.fab.variant)}"
                    .color="${"secondary-container"}"
                    .label="${ifDefined(this.expanded?this.fab.label:undefined)}"
                    .unelevated="${true}"
                ></md-fab>
            `:nothing}
            <md-list 
                class="md-navigation-rail__list"                
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

        this.classList.add("md-navigation-rail");

        this.style.setProperty("--navigation-rail-item-selected-icon", "none");
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
