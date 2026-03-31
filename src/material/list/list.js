import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";

class MDList extends MDComponent {
    static properties = {
        items: { type: Array },
        interactive: { type: Boolean },
        selection: { type: Boolean },
        mode: { type: String },
    };

    constructor() {
        super();
        this.items = [];
        this.interactive = true;
        this.selection = false;
        this.selected = new Set();
    }

    _handleListItemClick(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (this.mode === "single-select") {
                this.selected.clear();
                this.selected.add(snapshot.id);
            } else if (this.mode === "multi-select") {
                if (this.selected.has(snapshot.id)) {
                    this.selected.delete(snapshot.id);
                } else {
                    this.selected.add(snapshot.id);
                }
            }

            this.requestUpdate();

            this.emit("listItemSelection", { selected: this.selected });
        }

        this.emit("listItemClick", { event });
    }

    render() {
        /* prettier-ignore */
        return repeat(this.items,(item)=>item.id,(item)=>html`
            <md-list-item
                .snapshot="${item}"
                .leading="${ifDefined(item.leading)}"
                .label="${ifDefined(item.label)}"
                .supportingText="${ifDefined(item.supportingText)}"
                .trailing="${ifDefined(item.trailing)}"
                .selected="${this.selected.has(item.id)}"
                routerLink="${ifDefined(item.routerLink)}"
                .interactive="${ifDefined(this.interactive)}"
                @click="${this._handleListItemClick}"
            ></md-list-item>
        `)
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");
    }

    _getSelected(items) {
        const result = new Set();
        const stack = [...items];
        while (stack.length) {
            const node = stack.pop();
            if (node.selected) {
                result.add(node.id);
            }
            if (node.children?.length) {
                stack.push(...node.children);
            }
        }
        return result;
    }

    _updateSelected() {
        const selected = this._getSelected(this.items);
        selected.forEach((id) => this.selected.add(id));
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("items")) {
            this._updateSelected();
        }
    }
}

customElements.define("md-list", MDList);

export { MDList };
