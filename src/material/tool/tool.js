import { html, nothing } from "lit";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

function _renderAvatar(properties = {}) {
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

function _renderImage(properties = {}) {
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

function _renderIcon(properties = {}) {
    /* prettier-ignore */
    return html`
        <md-icon
            id="${ifDefined(properties.id)}"
            class="${classMap({'md-tool':true,...properties.class})}"
            style="${styleMap({...properties.style})}"
            tabindex="${ifDefined(properties.tabindex)}"
        >${properties.icon}
        </md-icon>
    `
}

function _renderCheckbox(properties = {}) {
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

function _renderRadioButton(properties = {}) {
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

function _renderSwitch(properties = {}) {
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

function _renderText(properties = {}) {
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

function _renderBadge(properties = {}) {
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

function renderTool(component = "icon", properties = {}) {
    /* prettier-ignore */
    return choose(component,[
        ['avatar',() => _renderAvatar({size:'extra-large',...properties})],
        ['image',() => _renderImage({...properties,style:{width:'56px',height:'56px',...properties.style}})],
        ['video',() => _renderImage({...properties,style:{width:'96px',height:'64px',...properties.style}})],
        ['icon',() => _renderIcon(properties)],
        ['checkbox',() => _renderCheckbox(properties)],
        ['radio-button',() => _renderRadioButton(properties)],
        ['switch',() => _renderSwitch(properties)],
        ['text',() => _renderText(properties)],
        ['badge',() => _renderBadge(properties)],
    ],() => nothing)
}

export { renderTool };
