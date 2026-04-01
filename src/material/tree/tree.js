import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";

class MDTree extends MDComponent {
    static properties = {
        items: { type: Array },
        interactive: { type: Boolean },
        selection: { type: Boolean },
        mode: { type: String },
        inputFormat: { type: String }, // nested/flat
        _list: { type: Array, state: true },
    };

    constructor() {
        super();
        this.items = [];
        this.interactive = true;
        this.selection = true;
        this.mode = "single-select";
        this.selected = new Set();
        this.expanded = new Set();
        this.inputFormat = "nested";
        this._tree = [];
        this._list = [];
    }

    _handleTreeItemClick(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (this.mode === "single-select") {
                if (snapshot.hasChildren) {
                    if (this.expanded.has(snapshot.id)) {
                        this.expanded.delete(snapshot.id);
                    } else {
                        this.expanded.add(snapshot.id);
                    }
                }

                this.selected.clear();
                this.selected.add(snapshot.id);
            } else if (this.mode === "multi-select") {
                if (this.selected.has(snapshot.id)) {
                    this.selected.delete(snapshot.id);
                } else {
                    this.selected.add(snapshot.id);
                }
            }

            this._setList();

            this.emit("treeItemSelected", { event });
        }

        this.emit("treeItemClick", { event });
    }

    render() {
        const rootHasBranch = this._tree.some(node=>node.children?.length)

        /* prettier-ignore */
        return repeat(this._list,(item)=>item.id,(item)=>html`
            <md-tree-item
                style="${styleMap({'--md-comp-tree-item-level':item.level,})}"
                .snapshot="${item}"
                .leading="${[
                    ...(rootHasBranch?[{component:'icon',icon:item.hasChildren?item.expanded?'keyboard_arrow_down':'keyboard_arrow_right':''}]:[]),
                    {component:'icon',icon:item.hasChildren?this.expanded.has(item.id)?'folder_open':'folder':'draft'}
                ]}"
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
        const map = new Map();
        const tree = [];

        list.forEach((item) => {
            map.set(item.id, { ...item, children: [] });
        });

        list.forEach((item) => {
            const node = map.get(item.id);

            if (item.parent_id) {
                const parent = map.get(item.parent_id);

                if (parent) {
                    parent.children.push(node);
                } else {
                    tree.push(node); //fallback
                }
            } else {
                tree.push(node);
            }
        });

        return tree;
    }

    _setTree() {
        this._tree = this.inputFormat === "nested" ? this.items : this._buildTree(this.items);
    }

    _getSelected() {
        const selected = new Set();
        const nodes = [...this._tree];

        while (nodes.length) {
            const node = nodes.pop();

            if (node.selected) {
                selected.add(node.id);
            }

            if (node.children?.length) {
                nodes.push(...node.children);
            }
        }

        return selected;
    }

    _setSelected() {
        const selected = this._getSelected();
        selected.forEach((id) => this.selected.add(id));
    }

    _getParents() {
        const parents = new Map();

        const walk = (node, parent) => {
            if (parent) {
                parents.set(node.id, parent.id);
            }

            if (node.children?.length) {
                node.children.forEach((child) => walk(child, node));
            }
        };

        this._tree.forEach((node) => walk(node));

        return parents;
    }

    _setParents() {
        this._parents = this._getParents();
    }

    _getSelectedParents(id) {
        const path = [];
        let current = id;

        while (this._parents.has(current)) {
            const parent = this._parents.get(current);
            path.push(parent);

            current = parent;
        }

        return path.reverse();
    }

    _getAllSelectedParents() {
        const parents = new Set();

        for (const id of this.selected) {
            const path = this._getSelectedParents(id);
            path.forEach((p) => parents.add(p));
        }

        return parents;
    }

    _setExpanded() {
        const parents = this._getAllSelectedParents();
        parents.forEach((id) => this.expanded.add(id));
    }

    _getList() {
        const list = [];

        const walk = (node, level = 0) => {
            const expanded = this.expanded.has(node.id);

            const { children, ...item } = node;

            list.push({
                ...item,
                hasChildren: !!children?.length,
                expanded,
                level,
            });

            if (!expanded) {
                return;
            }

            if (children?.length) {
                children.forEach((node) => walk(node, level + 1));
            }
        };

        this._tree.forEach((node) => walk(node, 0));

        return list;
    }

    _setList() {
        this._list = this._getList();
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("items") || _changedProperties.has("inputFormat")) {
            this._setTree();
            this._setSelected();
            this._setParents();
            this._setExpanded();
            this._setList();
        }
    }
}

customElements.define("md-tree", MDTree);

export { MDTree };
