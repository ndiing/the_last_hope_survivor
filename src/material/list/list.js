import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

class MDList extends MDComponent {
    static properties = {
        items: { type: Array },
        interactive: { type: Boolean },

        selection: { type: Boolean },
        mode: { type: String },

        inputItems: { type: String },
    };

    constructor() {
        super();
        this.items = [];
        this.interactive = true;
        this.inputItems = "tree";

        this.tree = [];
        this.expanded = new Set();
        this.selected = new Set();
    }

    get list() {
        const list = [];

        const walk = (node, level) => {
            const expanded = this.expanded.has(node.id);
            const selected = this.selected.has(node.id);

            const { children, ...item } = node;

            list.push({
                ...item,
                hasChildren: !!children?.length,
                expanded,
                level,
                selected,
            });

            if (!expanded) {
                return;
            }

            if (children?.length) {
                children.forEach((node) => walk(node, level + 1));
            }
        };

        this.tree.forEach((node) => walk(node, 0));

        return list;
    }

    _listItemStyle(item) {
        const style = {
            "--md-comp-list-item-level": item.level,
        };
        return style;
    }

    _handleListItemClick(event) {
        if (event.target.closest(".md-checkbox,.md-radio-button,.md-switch")) {
            return;
        }

        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (this.mode === "single-select") {
                if (this.expanded.has(snapshot.id)) {
                    this.expanded.delete(snapshot.id);
                } else {
                    this.expanded.add(snapshot.id);
                }

                this.selected.clear();
                this.selected.add(snapshot.id);

                this.lastSelectedIndex = this.items.indexOf(snapshot);
            } else if (this.mode === "multi-select") {
                if (this.selected.has(snapshot.id)) {
                    this.selected.delete(snapshot.id);
                } else {
                    this.selected.add(snapshot.id);
                }
            }

            this.requestUpdate();
        }

        this.emit("listItemClick", { event });
    }

    _handleCheckboxNativeInput(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (this.selected.has(snapshot.id)) {
                this.selected.delete(snapshot.id);
            } else {
                this.selected.add(snapshot.id);
            }

            this.requestUpdate();
        }
    }

    _handleRadioButtonNativeInput(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            this.selected.clear();
            this.selected.add(snapshot.id);

            this.requestUpdate();
        }
    }

    _handleSwitchNativeInput(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (this.selected.has(snapshot.id)) {
                this.selected.delete(snapshot.id);
            } else {
                this.selected.add(snapshot.id);
            }

            this.requestUpdate();
        }
    }

    render() {
        /* prettier-ignore */
        return this.list.map(item=>html`
            <md-list-item
                .snapshot="${item}"
                style="${styleMap(this._listItemStyle(item))}"
                .leading="${ifDefined(item.leading)}"
                .label="${ifDefined(item.label)}"
                .supportingText="${ifDefined(item.supportingText)}"
                .trailing="${ifDefined(item.trailing)}"
                .selected="${ifDefined(item.selected)}"
                routerLink="${ifDefined(item.routerLink)}"
                .interactive="${ifDefined(this.interactive)}"
                @click="${this._handleListItemClick}"
                @checkboxNativeInput="${this._handleCheckboxNativeInput}"
                @radioButtonNativeInput="${this._handleRadioButtonNativeInput}"
                @switchNativeInput="${this._handleSwitchNativeInput}"
            ></md-list-item>
        `)
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");
    }

    _buildTree(items) {
        const map = new Map();
        const tree = [];

        items.forEach((item) => {
            map.set(item.id, { ...item, children: [] });
        });

        items.forEach((item) => {
            const node = map.get(item.id);

            if (item.parent_id) {
                const parent = map.get(item.parent_id);
                parent.children.push(node);
            } else {
                tree.push(node);
            }
        });

        return tree;
    }

    _collectSelectedIds(tree, result = new Set()) {
        for (const node of tree) {
            if (node.selected) {
                result.add(node.id);
            }

            if (node.children?.length) {
                this._collectSelectedIds(node.children, result);
            }
        }
        return result;
    }

    _buildParentMap(tree) {
        const map = new Map();

        const walk = (node, parent = null) => {
            if (parent) {
                map.set(node.id, parent.id);
            }

            if (node.children?.length) {
                node.children.forEach((child) => walk(child, node));
            }
        };

        tree.forEach((node) => walk(node));

        return map;
    }

    _getParentsFast(id) {
        const path = [];
        let current = id;

        while (this.parentMap.has(current)) {
            const parent = this.parentMap.get(current);
            path.push(parent);
            current = parent;
        }

        return path.reverse();
    }

    _getAllParentsFast() {
        const parents = new Set();

        for (const id of this.selected) {
            const path = this._getParentsFast(id);
            path.forEach((p) => parents.add(p));
        }

        return parents;
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("items") || _changedProperties.has("inputItems")) {
            this.tree = this.inputItems === "list" ? this._buildTree(this.items) : this.items;

            this.selected = this._collectSelectedIds(this.tree);

            this.parentMap = this._buildParentMap(this.tree);

            const parents = this._getAllParentsFast();
            parents.forEach((id) => this.expanded.add(id));
        }
    }
}

customElements.define("md-list", MDList);

export { MDList };
