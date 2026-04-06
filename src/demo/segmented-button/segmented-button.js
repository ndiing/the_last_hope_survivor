import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSegmentedButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column style="padding:24px;">
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-segmented-button></md-segmented-button>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-segmented-button", DemoSegmentedButton);

export default document.createElement("demo-segmented-button");
