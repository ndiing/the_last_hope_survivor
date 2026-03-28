import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoIconButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button></md-icon-button>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-icon-button", DemoIconButton);

export default document.createElement("demo-icon-button");
