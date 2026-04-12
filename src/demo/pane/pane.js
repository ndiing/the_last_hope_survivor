import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoPane extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-pane></md-pane>
        `
    }
}

customElements.define("demo-pane", DemoPane);

export default document.createElement("demo-pane");
