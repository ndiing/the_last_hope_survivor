import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestIcon extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12">
                        <md-icon>image</md-icon>
                    </div>
                </div>

            <!-- </div> -->
        `
    }
}

customElements.define("test-icon", TestIcon);

export default document.createElement("test-icon");
