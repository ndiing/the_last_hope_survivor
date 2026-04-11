import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoMenu extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-menu></md-menu>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-menu", DemoMenu);

export default document.createElement("demo-menu");
