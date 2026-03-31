import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";

class MDTree extends MDComponent {
    static properties = {
        items: { type: Array },
        _list: { type: Array, state: true },
        format: { type: String },
        interactive: { type: Boolean },
        selection: { type: Boolean },
        mode: { type: String }, // single-select/multi-select
    };

    constructor() {
        super();
        this.items = [];
        this._tree = [];
        this._list = [];
        this.format = "nested"; // flat/nested
        this.interactive = true;
        this.selection = true;
        this.expanded = new Set();
        this.selected = new Set();
    }

    _handleTreeItemClick(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (snapshot.hasChildren) {
                if (this.expanded.has(snapshot.id)) {
                    this.expanded.delete(snapshot.id);
                } else {
                    this.expanded.add(snapshot.id);
                }
            }

            this.selected.clear();
            this.selected.add(snapshot.id);

            this._updateList();

            this.emit("treeItemSelection", { selected: this.selected });
        }

        this.emit("treeItemClick", { event });
    }

    render() {
        /* prettier-ignore */
        return repeat(this._list,(item)=>item.id,(item)=>html`
            <md-tree-item
                .snapshot="${item}"
                .leading="${ifDefined(item.leading)}"
                .label="${ifDefined(item.label)}"
                .supportingText="${ifDefined(item.supportingText)}"
                .trailing="${ifDefined(item.trailing)}"
                .selected="${this.selected.has(item.id)}"
                routerLink="${ifDefined(item.routerLink)}"
                .interactive="${ifDefined(this.interactive)}"
                @click="${this._handleTreeItemClick}"
            ></md-tree-item>
        `)
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tree");
    }

    _buildTree(list) {
        const tree = [];
        const map = new Map();

        list.forEach((item) => {
            map.set(item.id, { ...item, children: [] });
        });

        list.forEach((item) => {
            const node = map.get(item.id);

            if (item.parent_id) {
                const parent = map.get(item.parent_id);
                if (parent) {
                    parent.children.push(node);
                }
            } else {
                tree.push(node);
            }
        });

        return tree;
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

    _getList() {
        const list = [];

        const walk = (node, level = 0) => {
            const expanded = this.expanded.has(node.id);

            const { children, ...item } = node;

            list.push({
                ...item,
                level,
                hasChildren: !!children?.length,
                expanded,
            });

            if (!expanded) {
                return;
            }

            if (children?.length) {
                children.forEach((node) => walk(node, level + 1));
            }
        };

        this._tree.forEach((node) => walk(node));

        return list;
    }

    _updateList() {
        this._list = this._getList();
        console.debug("[_updateList]", this._list);
    }

    _getParents(tree) {
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

    _getParentsId(id) {
        const path = [];
        let current = id;
        while (this._parents.has(current)) {
            const parent = this._parents.get(current);
            path.push(parent);
            current = parent;
        }
        return path.reverse();
    }
    _getAllParents() {
        const parents = new Set();
        for (const id of this.selected) {
            const path = this._getParentsId(id);
            path.forEach((p) => parents.add(p));
        }
        return parents;
    }

    _updateExpanded() {
        const parents = this._getAllParents();
        parents.forEach((id) => this.expanded.add(id));
    }
    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("items")) {
            this._tree = this.format === "nested" ? this.items : this._buildTree(this.items);
            this._updateSelected();
            this._parents = this._getParents(this._tree);
            this._updateExpanded();
            this._updateList();
        }
    }
}

customElements.define("md-tree", MDTree);

export { MDTree };
