import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoChip extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-chip></md-chip>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-chip", DemoChip);

export default document.createElement("demo-chip");
