import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/breakpoint/breakpoint.js";

class TestDev extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">


                </md-layout-column-item>
            </md-layout-column> -->
        `
    }
}

customElements.define("test-dev", TestDev);

export default document.createElement("test-dev");
