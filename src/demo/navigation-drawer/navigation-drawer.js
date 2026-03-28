import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationDrawer extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-navigation-drawer></md-navigation-drawer>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-navigation-drawer", DemoNavigationDrawer);

export default document.createElement("demo-navigation-drawer");
