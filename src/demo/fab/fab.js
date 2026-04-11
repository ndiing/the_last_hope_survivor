import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoFab extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="edit" variant="small"></md-fab>
                    <md-fab icon="edit" variant="medium"></md-fab>
                    <md-fab icon="edit" variant="large"></md-fab>
                </md-column-item>
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-fab icon="edit" color="primary-container"></md-fab>
                    <md-fab icon="edit" color="secondary-container"></md-fab>
                    <md-fab icon="edit" color="tertiary-container"></md-fab>
                    <md-fab icon="edit" color="primary"></md-fab>
                    <md-fab icon="edit" color="secondary"></md-fab>
                    <md-fab icon="edit" color="tertiary"></md-fab>
                </md-column-item>

            </md-column>
        `
    }
}

customElements.define("demo-fab", DemoFab);

export default document.createElement("demo-fab");
