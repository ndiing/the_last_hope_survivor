import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { tool } from "../tool/tool.js";
import { RippleController } from "../ripple/ripple.js";

class MDTreeItem extends MDComponent {
    static properties = {
        leading: { type: Object },
        label: { type: Object },
        supportingText: { type: Object },
        trailing: { type: Array },
        layout: { type: String },
        interactive: { type: Boolean },
        selected: { type: Boolean, reflect: true },
    };

    layouts = ["one-line", "two-line", "three-line"];

    rippleController = new RippleController(this, {});

    render() {
        /* prettier-ignore */
        return html`
            ${this.leading?.component?tool(this.leading.component,{
                ...this.leading,
                class:{
                    'md-tree__leading':true,
                    'md-tree__leading-item':true,
                    [`md-tree__leading-item--${this.leading.component}`]:true,
                    ...this.leading.class
                },
                tabindex:-1,
                checked:this.selected
            }):nothing}
            ${this.label||this.supportingText?html`
                <div class="md-tree__content">
                    ${this.label?html`<div class="md-tree__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-tree__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${Array.isArray(this.trailing)?html`<md-tool-group class="md-tree__trailing" .tools="${this.trailing.map(item=>({
                ...item,
                class:{
                    'md-tree__trailing-item':true,
                    [`md-tree__trailing-item--${item.component}`]:true,
                    ...item.class
                },
                tabindex:-1,
                checked:this.selected
            }))}"></md-tool-group>`:nothing}
        `
    }

    get _treeSupportingText() {
        return this.querySelector(".md-tree__supporting-text");
    }

    _setLayout() {
        let layout = "one-line";

        if (this._treeSupportingText) {
            const lineHeight = parseInt(window.getComputedStyle(this._treeSupportingText).getPropertyValue("line-height"));

            layout = "two-line";
            if (this._treeSupportingText.clientHeight > lineHeight) {
                layout = "three-line";
            }
        }

        this.layout = layout;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tree__item");

        await this.updateComplete;

        this._setLayout();
    }

    _updateLayoutClass() {
        this.layouts.forEach((layout) => {
            if (layout === this.layout) {
                this.classList.add(`md-tree__item--${layout}`);
            } else {
                this.classList.remove(`md-tree__item--${layout}`);
            }
        });
    }

    _updateInteractiveClass() {
        if (this.interactive) {
            this.classList.add("md-tree__item--interactive");
        } else {
            this.classList.remove("md-tree__item--interactive");
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("layout")) {
            this._updateLayoutClass();
        }

        if (_changedProperties.has("interactive")) {
            this._updateInteractiveClass();
        }
    }
}

customElements.define("md-tree-item", MDTreeItem);

export { MDTreeItem };
