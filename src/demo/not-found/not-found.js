import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNotFound extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <h1>NotFound</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define("demo-not-found", DemoNotFound);

export default document.createElement("demo-not-found");
