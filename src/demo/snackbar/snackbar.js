import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSnackbar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-snackbar></md-snackbar>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-snackbar", DemoSnackbar);

export default document.createElement("demo-snackbar");
