import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { tool } from "../tool/tool.js";
import { RippleController } from "../ripple/ripple.js";

class MDTreeItem extends MDComponent {
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

    rippleController = new RippleController(this, {});

    render() {
        /* prettier-ignore */
        return html`
            ${Array.isArray(this.leading)?html`<md-tool-group class="md-push-menu__leading" .tools="${this.leading.map(item=>({
                ...item,
                class:{
                    'md-push-menu__leading-item':true,
                    [`md-push-menu__leading-item--${item.component}`]:true,
                    ...item.class
                },
                tabindex:-1,
                checked:this.selected
            }))}"></md-tool-group>`:nothing}
            ${this.label||this.supportingText?html`
                <div class="md-push-menu__content">
                    ${this.label?html`<div class="md-push-menu__label">${this.label}</div>`:nothing}
                    ${this.supportingText?html`<div class="md-push-menu__supporting-text">${this.supportingText}</div>`:nothing}
                </div>
            `:nothing}
            ${Array.isArray(this.trailing)?html`<md-tool-group class="md-push-menu__trailing" .tools="${this.trailing.map(item=>({
                ...item,
                class:{
                    'md-push-menu__trailing-item':true,
                    [`md-push-menu__trailing-item--${item.component}`]:true,
                    ...item.class
                },
                tabindex:-1,
                checked:this.selected
            }))}"></md-tool-group>`:nothing}
        `
    }

    get _pushMenuSupportingText() {
        return this.querySelector(".md-push-menu__supporting-text");
    }

    _setLayout() {
        let layout = "one-line";

        if (this._pushMenuSupportingText) {
            const lineHeight = parseInt(window.getComputedStyle(this._pushMenuSupportingText).getPropertyValue("line-height"));

            layout = "two-line";
            if (this._pushMenuSupportingText.clientHeight > lineHeight) {
                layout = "three-line";
            }
        }

        this.layout = layout;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-push-menu__item");

        await this.updateComplete;

        this._setLayout();
    }

    _updateLayoutClass() {
        this.layouts.forEach((layout) => {
            if (layout === this.layout) {
                this.classList.add(`md-push-menu__item--${layout}`);
            } else {
                this.classList.remove(`md-push-menu__item--${layout}`);
            }
        });
    }

    _updateInteractiveClass() {
        if (this.interactive) {
            this.classList.add("md-push-menu__item--interactive");
        } else {
            this.classList.remove("md-push-menu__item--interactive");
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

customElements.define("md-push-menu-item", MDTreeItem);

export { MDTreeItem };
