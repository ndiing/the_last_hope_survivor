import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestLayoutColumnCompact extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->

                <md-layout-column>
                    <md-layout-column-item compact="1">1</md-layout-column-item>
                    <md-layout-column-item compact="3">3</md-layout-column-item>
                    <md-layout-column-item compact="2">2</md-layout-column-item>
                    <md-layout-column-item compact="2">2</md-layout-column-item>
                    <md-layout-column-item compact="4">4</md-layout-column-item>
                </md-layout-column>
            <!-- </div> -->
        `
    }
}

customElements.define("test-layout-column-compact", TestLayoutColumnCompact);

export default document.createElement("test-layout-column-compact");
