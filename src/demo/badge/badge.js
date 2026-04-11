import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoBadge extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-badge label=""></md-badge>
                    <md-badge label="3"></md-badge>
                    <md-badge label="1000"></md-badge>
                </md-column-item>
                
            </md-column>
        `
    }
}

customElements.define("demo-badge", DemoBadge);

export default document.createElement("demo-badge");
