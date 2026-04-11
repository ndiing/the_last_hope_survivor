import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { choose } from "lit/directives/choose.js";
import { MDList } from "../list/list.js";
import { MDTree } from "../tree/tree.js";
import { MDPushMenu } from "../push-menu/push-menu.js";
import { MDLayoutItem } from "../layout/layout-item.js";

class MDNavigationDrawer extends MDLayoutItem {
    static properties = {
        items: { type: Array },
        interactive: { type: Boolean },
        selection: { type: Boolean },
        mode: { type: String },
        inputFormat: { type: String },
        ripple: { type: Object },

        // ...MDLayoutBorderItem.properties,
        region: { type: String },
        open: { type: Boolean },
        modal: { type: Boolean },
        margin: { type: Boolean },

        layout: { type: String },
    };

    layouts = ["list", "tree", "push-menu"];

    constructor() {
        super();
        this.items = [];
        this.interactive = true;
        this.selection = true;
        this.mode = "single-select";
        this.inputFormat = "flat";
        this.ripple = {};
        this.layout = "list";
        this.region = "west";
        this.open = false;
        this.modal = false;
        this.margin = false;
    }

    _renderList() {
        /* prettier-ignore */
        return html`
            <md-list 
                .items="${this.items}"
                .interactive="${this.interactive}"
                .selection="${this.selection}"
                .mode="${this.mode}"
                .inputFormat="${this.inputFormat}"
                .ripple="${this.ripple}"
            ></md-list>
        `
    }

    _renderTree() {
        /* prettier-ignore */
        return html`
            <md-tree 
                .items="${this.items}"
                .interactive="${this.interactive}"
                .selection="${this.selection}"
                .mode="${this.mode}"
                .inputFormat="${this.inputFormat}"
                .ripple="${this.ripple}"
            ></md-tree>
        `
    }

    _renderPushMenu() {
        /* prettier-ignore */
        return html`
            <md-push-menu 
                .items="${this.items}"
                .interactive="${this.interactive}"
                .selection="${this.selection}"
                .mode="${this.mode}"
                .inputFormat="${this.inputFormat}"
                .ripple="${this.ripple}"
            ></md-push-menu>
        `
    }

    render() {
        /* prettier-ignore */
        return choose(this.layout,[
            ['list',() => this._renderList()],
            ['tree',() => this._renderTree()],
            ['push-menu',() => this._renderPushMenu()],
        ],() => nothing)
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawer);

export { MDNavigationDrawer };
