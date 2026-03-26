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
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="edit" label="Compose"></md-fab>
                    <md-fab icon="edit" label="Compose" variant="medium"></md-fab>
                    <md-fab icon="edit" label="Compose" variant="large"></md-fab>
                </md-layout-column-item>
                 
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="add" label="Compose" color="primary-container"></md-fab><br><br>
                    <md-fab icon="add" label="Compose" color="secondary-container"></md-fab><br><br>
                    <md-fab icon="add" label="Compose" color="tertiary-container"></md-fab><br><br>
                    <md-fab icon="add" label="Compose" color="primary"></md-fab><br><br>
                    <md-fab icon="add" label="Compose" color="secondary"></md-fab><br><br>
                    <md-fab icon="add" label="Compose" color="tertiary"></md-fab>
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="edit" label="Compose"></md-fab>
                    <md-fab label="Compose"></md-fab>
                </md-layout-column-item>
                
            </md-layout-column>
        `
    }
}

customElements.define("test-fab", TestFab);

export default document.createElement("test-fab");
