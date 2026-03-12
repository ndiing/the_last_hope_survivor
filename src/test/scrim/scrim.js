import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestScrim extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->
                <button @click="${this.handleScrimToggle}">scrim toggle</button>
                <md-scrim id="scrim"></md-scrim>

            <!-- </div> -->
        `
    }

    get scrim(){return this.querySelector('#scrim')}

    handleScrimToggle(){this.scrim.toggle()}
}

customElements.define("test-scrim", TestScrim);

export default document.createElement("test-scrim");
