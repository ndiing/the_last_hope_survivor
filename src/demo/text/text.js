import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoText extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column style="padding:24px;">
                <md-layout-column-item expanded="12" medium="4" compact="4">
                    <md-text scale="display-large">Display Large</md-text>
                    <md-text scale="display-medium">Display Medium</md-text>
                    <md-text scale="display-small">Display Small</md-text>
                    <md-text scale="headline-large">Headline Large</md-text>
                    <md-text scale="headline-medium">Headline Medium</md-text>
                    <md-text scale="headline-small">Headline Small</md-text>
                    <md-text scale="title-large">Title Large</md-text>
                    <md-text scale="title-medium">Title Medium</md-text>
                    <md-text scale="title-small">Title Small</md-text>
                    <md-text scale="body-large">Body Large</md-text>
                    <md-text scale="body-medium">Body Medium</md-text>
                    <md-text scale="body-small">Body Small</md-text>
                    <md-text scale="label-large">Label Large</md-text>
                    <md-text scale="label-medium">Label Medium</md-text>
                    <md-text scale="label-small">Label Small</md-text>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-text", DemoText);

export default document.createElement("demo-text");
