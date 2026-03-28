import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoFabMenu extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-fab-menu></md-fab-menu>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-fab-menu", DemoFabMenu);

export default document.createElement("demo-fab-menu");
