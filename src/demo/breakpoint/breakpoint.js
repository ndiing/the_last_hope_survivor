import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoBreakpoint extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-breakpoint></md-breakpoint>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-breakpoint", DemoBreakpoint);

export default document.createElement("demo-breakpoint");
