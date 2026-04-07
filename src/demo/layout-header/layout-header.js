import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutHeader extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-layout-header></md-layout-header>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-layout-header", DemoLayoutHeader);

export default document.createElement("demo-layout-header");
