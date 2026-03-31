import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoPushMenuItem extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-push-menu-item></md-push-menu-item>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-push-menu-item", DemoPushMenuItem);

export default document.createElement("demo-push-menu-item");
