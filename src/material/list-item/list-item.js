import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { tool } from "../tool/tool.js";
import { Ripple } from "../ripple/ripple.js";

class MDListItem extends MDComponent {
    static properties = {
        leading: { type: Array },
        label: { type: Object },
        supportingText: { type: Object },
        trailing: { type: Array },
        layout: { type: String },
        interactive: { type: Boolean },
        selected: { type: Boolean, reflect: true },
    };

    layouts = ["one-line", "two-line", "three-line"];

    constructor() {
        super();

        this._ripple = new Ripple(this, {});
    }

    render() {
        /* prettier-ignore */
        return html`
            ${Array.isArray(this.leading)?html`<md-tool-group class="md-list__leading" .tools="${this.leading.map(item=>({
                ...item,
                class:{
                    'md-list__leading-item':true,
                    [`md-list__leading-item--${item.component}`]:true,
                    ...item.class
                },
                checked:this.selected
            }))}"></md-tool-group>`:nothing}
            ${this.label||this.supportingText?html`
                <div class="md-list__content">
                    ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-list__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${Array.isArray(this.trailing)?html`<md-tool-group class="md-list__trailing" .tools="${this.trailing.map(item=>({
                ...item,
                class:{
                    'md-list__trailing-item':true,
                    [`md-list__trailing-item--${item.component}`]:true,
                    ...item.class
                },
                checked:this.selected
            }))}"></md-tool-group>`:nothing}
        `
    }

    get _listSupportingText() {
        return this.querySelector(".md-list__supporting-text");
    }

    _setLayout() {
        let layout = "one-line";

        if (this._listSupportingText) {
            const lineHeight = parseInt(window.getComputedStyle(this._listSupportingText).getPropertyValue("line-height"));

            layout = "two-line";
            if (this._listSupportingText.clientHeight > lineHeight) {
                layout = "three-line";
            }
        }

        this.layout = layout;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");

        await this.updateComplete;

        this._setLayout();

        this._ripple.init();
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__item");

        this._ripple.destroy();
    }

    _updateLayoutClass() {
        this.layouts.forEach((layout) => {
            if (layout === this.layout) {
                this.classList.add(`md-list__item--${layout}`);
            } else {
                this.classList.remove(`md-list__item--${layout}`);
            }
        });
    }

    _updateInteractiveClass() {
        if (this.interactive) {
            this.classList.add("md-list__item--interactive");
        } else {
            this.classList.remove("md-list__item--interactive");
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

customElements.define("md-list-item", MDListItem);

export { MDListItem };
