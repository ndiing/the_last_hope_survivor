import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoBottomSheet extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-bottom-sheet></md-bottom-sheet>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-bottom-sheet", DemoBottomSheet);

export default document.createElement("demo-bottom-sheet");
