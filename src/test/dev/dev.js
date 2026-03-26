import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/breakpoint/breakpoint.js";

class TestDev extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
        
        `
    }
}

customElements.define("test-dev", TestDev);

export default document.createElement("test-dev");
