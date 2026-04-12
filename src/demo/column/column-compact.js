import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutColumnCompact extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item compact="1">1</md-column-item>
                <md-column-item compact="3">3</md-column-item>
                <md-column-item compact="2">2</md-column-item>
                <md-column-item compact="2">2</md-column-item>
                <md-column-item compact="4">4</md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-layout-column-compact", DemoLayoutColumnCompact);

export default document.createElement("demo-layout-column-compact");
