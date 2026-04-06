import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/observer/observer.js";

class DemoBreakpoint extends MDComponent {
    static properties = {
        item: { state: true },
    };
    constructor() {
        super();
        this.item = {};
        this._breakpoint = new BreakpointObserver((item) => {
            this.item = item;
        });
    }
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column style="padding:24px;">
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <pre>${JSON.stringify(this.item,null,2)}</pre>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
    connectedCallback() {
        super.connectedCallback();

        this._breakpoint.observe();
    }
    disconnectedCallback() {
        super.disconnectedCallback();

        this._breakpoint.unobserve();
    }
}

customElements.define("demo-breakpoint", DemoBreakpoint);

export default document.createElement("demo-breakpoint");
