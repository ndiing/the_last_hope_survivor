import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoPane extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-pane></md-pane>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-pane", DemoPane);

export default document.createElement("demo-pane");
