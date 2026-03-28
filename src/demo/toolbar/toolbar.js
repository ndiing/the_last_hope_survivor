import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoToolbar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-toolbar></md-toolbar>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-toolbar", DemoToolbar);

export default document.createElement("demo-toolbar");
