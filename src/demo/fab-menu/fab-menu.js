import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoFabMenu extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-fab-menu></md-fab-menu>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-fab-menu", DemoFabMenu);

export default document.createElement("demo-fab-menu");
