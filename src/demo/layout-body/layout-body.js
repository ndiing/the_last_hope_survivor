import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutBody extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-layout-body></md-layout-body>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-layout-body", DemoLayoutBody);

export default document.createElement("demo-layout-body");
