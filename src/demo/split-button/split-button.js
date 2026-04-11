import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSplitButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-split-button></md-split-button>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-split-button", DemoSplitButton);

export default document.createElement("demo-split-button");
