import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";

class MDPushMenu extends MDComponent {
    static properties = {
        items: { type: Array },
        interactive: { type: Boolean },
        selection: { type: Boolean },
        mode: { type: String },
        inputFormat: { type: String },
        _stack: { state: true },
    };

    constructor() {
        super();
        this.items = [];
        this.interactive = true;
        this.selection = true;
        this.mode = "single-select";
        this.selected = new Set();
        this.inputFormat = "nested";
        this._tree = [];
        this._stack = [];
    }

    get current() {
        return this._stack[this._stack.length - 1];
    }

    push(item) {
        this._stack = [
            ...this._stack,
            {
                items: item.children,
                parent: item,
            },
        ];
    }

    pop() {
        if (this._stack.length > 1) {
            this._stack = this._stack.slice(0, -1);
        }
    }

    _handlePushMenuItemClick(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (snapshot?.children?.length) {
                this.push(snapshot);
            } else {
                this.selected.clear();
                this.selected.add(snapshot.id);
                this._setStack();
            }

            this.emit("pushMenuItemSelected", { event });
        }

        this.emit("pushMenuItemClick", { event });
    }

    render() {
        const { items, parent } = this.current;

        /* prettier-ignore */
        return html`    
            ${parent?html`
                <md-push-menu-item
                    .snapshot="${parent}"
                    .leading="${{component:'icon',icon:'arrow_back'}}"
                    .label="${ifDefined(parent.label)}"
                    .supportingText="${ifDefined(parent.supportingText)}"
                    .trailing="${ifDefined(parent.trailing)}"
                    .selected="${this.selected.has(parent.id)}"
                    routerLink="${ifDefined(parent.routerLink)}"
                    .interactive="${ifDefined(this.interactive)}"
                    @click="${this.pop}"
                ></md-push-menu-item>
            `:nothing}
            ${repeat(items,(item)=>item.id,(item)=>html`
                <md-push-menu-item
                    .snapshot="${item}"
                    .leading="${(item.leading?.icon||parent)?{component:'icon',icon:item.leading?.icon||''}:undefined}"
                    .label="${ifDefined(item.label)}"
                    .supportingText="${ifDefined(item.supportingText)}"
                    .trailing="${[...(item.children?.length?[{component:'icon',icon:'arrow_forward'}]:[])]}"
                    .selected="${this.selected.has(item.id)}"
                    routerLink="${ifDefined(item.routerLink)}"
                    .interactive="${ifDefined(this.interactive)}"
                    @click="${this._handlePushMenuItemClick}"
                ></md-push-menu-item>
            `)}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-push-menu");
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

    _setStack() {
        const [selectedId] = this.selected;

        if (!selectedId) {
            this._stack = [{ items: this._tree, parent: null }];
            return;
        }

        const path = this._getSelectedParents(selectedId);

        const stack = [];
        let current = this._tree;

        stack.push({
            items: current,
            parent: null,
        });

        for (const parentId of path) {
            const node = current.find((n) => n.id === parentId);

            if (!node) break;

            current = node.children || [];

            stack.push({
                items: current,
                parent: node,
            });
        }

        this._stack = stack;
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("items") || _changedProperties.has("inputFormat")) {
            this._setTree();
            this._setSelected();
            this._setParents();
            this._setStack();
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        console.log(this._stack)
    }
}

customElements.define("md-push-menu", MDPushMenu);

export { MDPushMenu };
