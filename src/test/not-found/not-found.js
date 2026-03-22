import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestNotFound extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <h1>NotFound</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define("test-not-found", TestNotFound);

export default document.createElement("test-not-found");
