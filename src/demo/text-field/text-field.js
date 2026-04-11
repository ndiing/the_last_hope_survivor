import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTextField extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-text-field></md-text-field>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-text-field", DemoTextField);

export default document.createElement("demo-text-field");
