import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/breakpoint/breakpoint.js";

class TestBreakpoint extends MDComponent {
    static properties = {
        log: { type: Object },
    };

    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12">
                        <pre>${JSON.stringify(this.log,null,4)}</pre>
                    </div>
                </div>
                
            <!-- </div> -->
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.breakpointObserver = new BreakpointObserver((item) => {
            this.log = item;
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
