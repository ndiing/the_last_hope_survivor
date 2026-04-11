import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutBody extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column>
                <md-column-item expanded="4" medium="4" compact="4">
                    <md-pane-body></md-pane-body>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-layout-body", DemoLayoutBody);

export default document.createElement("demo-layout-body");
