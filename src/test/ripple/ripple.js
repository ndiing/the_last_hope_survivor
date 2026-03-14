import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/breakpoint/breakpoint.js";
import { RippleController } from "../../material/ripple/ripple.js";

class TestRipple extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <div id="ripple1" class="example-ripple"></div>
                    <div id="ripple2" class="example-ripple"></div>
                    <div id="ripple3" class="example-ripple"></div>
                    <div id="ripple4" class="example-ripple"></div>
                </md-layout-column-item>

            </md-layout-column>
        `
    }

    firstUpdated() {
        new RippleController(this.querySelector("#ripple1"));
        new RippleController(this.querySelector("#ripple2"), {
            centered: true,
        });
        new RippleController(this.querySelector("#ripple3"), {
            radius: 256,
        });
        new RippleController(this.querySelector("#ripple4"), {
            unbounded: true,
        });
    }
}

customElements.define("test-ripple", TestRipple);

export default document.createElement("test-ripple");
