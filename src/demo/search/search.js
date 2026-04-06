import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSearch extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column style="padding:24px;">
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-search></md-search>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-search", DemoSearch);

export default document.createElement("demo-search");
