import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoText extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-text></md-text>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-text", DemoText);

export default document.createElement("demo-text");
