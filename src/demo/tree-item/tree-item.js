import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTreeItem extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-tree-item></md-tree-item>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-tree-item", DemoTreeItem);

export default document.createElement("demo-tree-item");
