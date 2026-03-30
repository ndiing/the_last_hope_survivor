import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderTool } from "../tool/tool.js";
import { ifDefined } from "lit/directives/if-defined.js";

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
    }

    _handleListItemClick(event) {
        if (event.target.closest(".md-checkbox,.md-radio-button,.md-switch")) {
            return;
        }

        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;

            if (event.ctrlKey) {
                snapshot.selected = !snapshot.selected;
            } else if (event.shiftKey) {
                this.lastSelectedIndex = this.lastSelectedIndex || 0;
                this.currentSelectedIndex = this.items.indexOf(snapshot);

                const [fromIndex, toIndex] = [this.currentSelectedIndex, this.lastSelectedIndex].sort();

                this.items.forEach((item, index) => {
                    item.selected = index >= fromIndex && index <= toIndex;
                });
            } else if (this.mode === "single-select") {
                this.items.forEach((item) => {
                    item.selected = item === snapshot;
                });

                this.lastSelectedIndex = this.items.indexOf(snapshot);
            } else if (this.mode === "multi-select") {
                snapshot.selected = !snapshot.selected;
            }

            this.requestUpdate();
        }

        this.emit("listItemClick", { event, component: this });
    }

    _handleListItemFocus(event) {
        const snapshot = event.target.closest(".md-list__item").snapshot;

        this.currentFocusedIndex = this.items.indexOf(snapshot);

        this.emit("listItemFocus", { event });
    }

    _handleCheckboxNativeInput(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;
            snapshot.selected = !snapshot.selected;
            this.requestUpdate();
        }
    }

    _handleRadioButtonNativeInput(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;
            this.items.forEach((item) => {
                item.selected = item === snapshot;
            });
            this.requestUpdate();
        }
    }

    _handleSwitchNativeInput(event) {
        if (this.interactive && this.selection) {
            const snapshot = event.currentTarget.snapshot;
            snapshot.selected = !snapshot.selected;
            this.requestUpdate();
        }
    }

    render() {
        /* prettier-ignore */
        return this.items.map(item=>html`
            <md-list-item
                .snapshot="${item}"
                .leading="${ifDefined(item.leading)}"
                .label="${ifDefined(item.label)}"
                .supportingText="${ifDefined(item.supportingText)}"
                .trailing="${ifDefined(item.trailing)}"
                .selected="${ifDefined(item.selected)}"
                routerLink="${ifDefined(item.routerLink)}"
                .interactive="${ifDefined(this.interactive)}"
                @click="${this._handleListItemClick}"
                @focus="${this._handleListItemFocus}"
                @checkboxNativeInput="${this._handleCheckboxNativeInput}"
                @radioButtonNativeInput="${this._handleRadioButtonNativeInput}"
                @switchNativeInput="${this._handleSwitchNativeInput}"
            ></md-list-item>
        `)
    }

    get listItemFocused() {
        return this.querySelector(`.md-list__item:nth-child(${this.currentFocusedIndex + 1})`);
    }

    _handleListKeydown(event) {
        if (this.interactive && this.selection && event.ctrlKey && event.key === "a") {
            event.preventDefault();

            this.items.forEach((item) => {
                item.selected = true;
            });

            this.requestUpdate();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();

            this.currentFocusedIndex = Math.max(this.currentFocusedIndex - 1, 0);

            const listItem = this.listItemFocused;
            listItem.focus();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();

            this.currentFocusedIndex = Math.min(this.currentFocusedIndex + 1, this.items.length - 1);

            const listItem = this.listItemFocused;
            listItem.focus();
        } else if (event.key === "Enter") {
            event.preventDefault();

            const listItem = this.listItemFocused;
            listItem.click();
        }

        this.emit("listKeydown", { event });
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this._handleListKeydown = this._handleListKeydown.bind(this);
        this.addEventListener("keydown", this._handleListKeydown);
    }
}

customElements.define("md-list", MDList);

export { MDList };
