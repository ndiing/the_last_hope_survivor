import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestScrim extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column >
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <button @click="${this.handleScrimToggle}">scrim toggle</button>
                    <md-scrim id="scrim"></md-scrim>
                </md-layout-column-item>
            </md-layout-column>
        `
    }

    get scrim() {
        return this.querySelector("#scrim");
    }

    handleScrimToggle() {
        this.scrim.toggle();
    }
}

customElements.define("test-scrim", TestScrim);

export default document.createElement("test-scrim");
