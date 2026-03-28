import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoListItem extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-list-item></md-list-item>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-list-item", DemoListItem);

export default document.createElement("demo-list-item");
