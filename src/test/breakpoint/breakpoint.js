import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/breakpoint/breakpoint.js";

class TestBreakpoint extends MDComponent {
    static properties = {
        item: { type: Object },
    };

    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <pre>${JSON.stringify(this.item,null,4)}</pre>
                </md-layout-column-item>
            </md-layout-column>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.breakpointObserver = new BreakpointObserver((item) => {
            this.item = item;
        });
        this.breakpointObserver.observe();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.breakpointObserver.unobserve();
    }
}

customElements.define("test-breakpoint", TestBreakpoint);

export default document.createElement("test-breakpoint");
