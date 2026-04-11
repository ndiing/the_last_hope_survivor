import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTab extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-tab></md-tab>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-tab", DemoTab);

export default document.createElement("demo-tab");
