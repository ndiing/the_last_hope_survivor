import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoExtendedFab extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-extended-fab></md-extended-fab>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-extended-fab", DemoExtendedFab);

export default document.createElement("demo-extended-fab");
