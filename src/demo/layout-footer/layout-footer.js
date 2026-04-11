import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutFooter extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column>
                <md-column-item expanded="4" medium="4" compact="4">
                    <md-pane-footer></md-pane-footer>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-layout-footer", DemoLayoutFooter);

export default document.createElement("demo-layout-footer");
