import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoVirtualScroll extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column style="padding:24px;">
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-virtual-scroll></md-virtual-scroll>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-virtual-scroll", DemoVirtualScroll);

export default document.createElement("demo-virtual-scroll");
