import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSegmentedButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-segmented-button></md-segmented-button>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-segmented-button", DemoSegmentedButton);

export default document.createElement("demo-segmented-button");
