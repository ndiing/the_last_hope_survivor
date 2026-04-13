import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTest extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <iframe src="http://localhost:8080/#/breakpoint" width="360" height="800"></iframe>
            <iframe src="http://localhost:8080/#/breakpoint" width="834" height="1112"></iframe>
            <iframe src="http://localhost:8080/#/breakpoint" width="1920" height="1080"></iframe>
        `
    }
}

customElements.define("demo-test", DemoTest);

export default document.createElement("demo-test");
