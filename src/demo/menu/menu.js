import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoMenu extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-menu></md-menu>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-menu", DemoMenu);

export default document.createElement("demo-menu");
