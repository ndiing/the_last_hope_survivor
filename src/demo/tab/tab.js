import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTab extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-tab></md-tab>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-tab", DemoTab);

export default document.createElement("demo-tab");
