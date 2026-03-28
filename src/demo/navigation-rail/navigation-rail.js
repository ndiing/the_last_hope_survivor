import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationRail extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-navigation-rail></md-navigation-rail>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-navigation-rail", DemoNavigationRail);

export default document.createElement("demo-navigation-rail");
