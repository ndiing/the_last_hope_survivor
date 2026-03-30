import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderTool } from "../tool/tool.js";
import { RippleController } from "../ripple/ripple.js";

class MDListItem extends MDComponent {
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

    constructor() {
        super();
        this.interactive = true;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.leading?.component?renderTool(this.leading.component,{
                ...this.leading,
                class:{
                    'md-list__leading':true,
                    [`md-list__leading--${this.leading.component}`]:true,
                    ...this.leading.class
                },
                tabindex:-1,
                checked:this.selected
            }):nothing}
            ${this.label||this.supportingText?html`
                <div class="md-list__content">
                    ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-list__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${Array.isArray(this.trailing)?html`<md-tool-group class="md-list__trailing" .tools="${this.trailing.map(item=>({
                ...item,
                tabindex:-1,
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
