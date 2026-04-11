import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSideSheet extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-side-sheet></md-side-sheet>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-side-sheet", DemoSideSheet);

export default document.createElement("demo-side-sheet");
