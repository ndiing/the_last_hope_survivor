import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutColumnCompact extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item compact="1">1</md-layout-column-item>
                <md-layout-column-item compact="3">3</md-layout-column-item>
                <md-layout-column-item compact="2">2</md-layout-column-item>
                <md-layout-column-item compact="2">2</md-layout-column-item>
                <md-layout-column-item compact="4">4</md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-layout-column-compact", DemoLayoutColumnCompact);

export default document.createElement("demo-layout-column-compact");
