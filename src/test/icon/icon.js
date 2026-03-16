import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestIcon extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column >
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon>image</md-icon>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("test-icon", TestIcon);

export default document.createElement("test-icon");
