import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestFab extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column >
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="add"></md-fab>
                    <md-fab icon="add" variant="medium"></md-fab>
                    <md-fab icon="add" variant="large"></md-fab>
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="add" color="primary-container"></md-fab>
                    <md-fab icon="add" color="secondary-container"></md-fab>
                    <md-fab icon="add" color="tertiary-container"></md-fab>
                    <md-fab icon="add" color="primary"></md-fab>
                    <md-fab icon="add" color="secondary"></md-fab>
                    <md-fab icon="add" color="tertiary"></md-fab>
                </md-layout-column-item>
                
            </md-layout-column>
        `
    }
}

customElements.define("test-fab", TestFab);

export default document.createElement("test-fab");
