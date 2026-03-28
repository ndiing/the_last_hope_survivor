import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoExample extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-example></md-example>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-example", DemoExample);

export default document.createElement("demo-example");
