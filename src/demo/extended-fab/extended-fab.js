import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoExtendedFab extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="edit" label="Label" variant="small"></md-fab>
                    <md-fab icon="edit" label="Label" variant="medium"></md-fab>
                    <md-fab icon="edit" label="Label" variant="large"></md-fab>
                </md-column-item>
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="edit" label="Label" color="primary-container"></md-fab>
                    <md-fab icon="edit" label="Label" color="secondary-container"></md-fab>
                    <md-fab icon="edit" label="Label" color="tertiary-container"></md-fab>
                    <md-fab icon="edit" label="Label" color="primary"></md-fab>
                    <md-fab icon="edit" label="Label" color="secondary"></md-fab>
                    <md-fab icon="edit" label="Label" color="tertiary"></md-fab>
                </md-column-item>
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="edit" label="Label"></md-fab>
                    <md-fab label="Label"></md-fab>
                </md-column-item>

            </md-column>
        `
    }
}

customElements.define("demo-extended-fab", DemoExtendedFab);

export default document.createElement("demo-extended-fab");
