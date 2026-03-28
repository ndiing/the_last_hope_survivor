import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoButtonGroup extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button-group></md-button-group>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-button-group", DemoButtonGroup);

export default document.createElement("demo-button-group");
