import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLoadingIndicator extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-loading-indicator></md-loading-indicator>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-loading-indicator", DemoLoadingIndicator);

export default document.createElement("demo-loading-indicator");
