import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayout extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            
        `
    }
}

customElements.define("demo-layout", DemoLayout);

export default document.createElement("demo-layout");
