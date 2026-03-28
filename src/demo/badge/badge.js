import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoBadge extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-badge></md-badge>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-badge", DemoBadge);

export default document.createElement("demo-badge");
