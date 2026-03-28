import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoProgressIndicator extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-progress-indicator></md-progress-indicator>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-progress-indicator", DemoProgressIndicator);

export default document.createElement("demo-progress-indicator");
