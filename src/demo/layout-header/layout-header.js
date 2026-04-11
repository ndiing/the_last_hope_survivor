import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutHeader extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column>
                <md-column-item expanded="4" medium="4" compact="4">
                    <md-pane-header></md-pane-header>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-layout-header", DemoLayoutHeader);

export default document.createElement("demo-layout-header");
