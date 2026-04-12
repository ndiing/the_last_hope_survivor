import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTest extends MDComponent {
    render() {
        /* prettier-ignore */
        return html``
    }
}

customElements.define("demo-test", DemoTest);

export default document.createElement("demo-test");
