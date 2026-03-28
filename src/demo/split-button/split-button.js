import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSplitButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-split-button></md-split-button>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-split-button", DemoSplitButton);

export default document.createElement("demo-split-button");
