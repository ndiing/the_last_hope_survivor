import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationBar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-navigation-bar></md-navigation-bar>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-navigation-bar", DemoNavigationBar);

export default document.createElement("demo-navigation-bar");
