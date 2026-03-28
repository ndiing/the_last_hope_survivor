import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSnackbar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-snackbar></md-snackbar>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-snackbar", DemoSnackbar);

export default document.createElement("demo-snackbar");
