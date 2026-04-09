import { MDComponent } from "../component/component.js";
import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

class MDToolGroup extends MDComponent {
    static properties = {
        tools: { type: Array },
    };

    constructor() {
        super();
        this.tools = [];
    }

    _renderAvatar(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-avatar
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                .src="${ifDefined(properties.src)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
            >
            </md-avatar>
        `
    }

    _renderImage(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-image
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .aspectRatio="${ifDefined(properties.aspectRatio)}"
                .shape="${ifDefined(properties.shape)}"
            >
            </md-image>
        `
    }

    _handleToolGroupIconAnimationend(event){
        this.emit('toolGroupIconAnimationend',{event})
    }

    _renderIcon(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-icon
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                @animationend="${this._handleToolGroupIconAnimationend}"
            >${properties.icon}
            </md-icon>
        `
    }

    _renderCheckbox(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-checkbox
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .indeterminate="${ifDefined(properties.indeterminate)}"
                .checked="${ifDefined(properties.checked)}"
                .disabled="${ifDefined(properties.disabled)}"
            >
            </md-checkbox>
        `
    }

    _renderRadioButton(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-radio-button
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .checked="${ifDefined(properties.checked)}"
                .disabled="${ifDefined(properties.disabled)}"
            >
            </md-radio-button>
        `
    }

    _renderSwitch(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-switch
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .checked="${ifDefined(properties.checked)}"
            >
            </md-switch>
        `
    }

    _renderText(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-text
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
            >${properties.text}
            </md-text>
        `
    }

    _renderBadge(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-badge
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                .label="${ifDefined(properties.label)}"
                .max="${ifDefined(properties.max)}"
            ></md-badge>
        `
    }

    _renderIconButton(properties = {}) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                id="${ifDefined(properties.id)}"
                class="${classMap({'md-tool':true,...properties.class})}"
                style="${styleMap({...properties.style})}"
                tabindex="${ifDefined(properties.tabindex)}"
                icon="${ifDefined(properties.icon)}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .width="${ifDefined(properties.width)}"
                .selected="${ifDefined(properties.selected)}"
            ></md-icon-button>
        `
    }

    _renderTool(component = "icon", properties = {}) {
        /* prettier-ignore */
        return choose(component,[
            ['avatar',() => this._renderAvatar({size:'extra-large',...properties})],
            ['image',() => this._renderImage({...properties,style:{width:'56px',height:'56px',...properties.style}})],
            ['video',() => this._renderImage({...properties,style:{width:'96px',height:'64px',...properties.style}})],
            ['icon',() => this._renderIcon(properties)],
            ['checkbox',() => this._renderCheckbox(properties)],
            ['radio-button',() => this._renderRadioButton(properties)],
            ['switch',() => this._renderSwitch(properties)],
            ['text',() => this._renderText(properties)],
            ['badge',() => this._renderBadge(properties)],
            ['icon-button',() => this._renderIconButton(properties)],
        ],() => nothing)
    }

    render() {
        return this.tools.map(({ component, ...properties }) => this._renderTool(component, properties));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tool-group");
    }
}

customElements.define("md-tool-group", MDToolGroup);

export { MDToolGroup };
