import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestLayoutColumnMedium extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->

                <md-layout-column>
                    <md-layout-column-item medium="1">1</md-layout-column-item>
                    <md-layout-column-item medium="7">7</md-layout-column-item>
                    <md-layout-column-item medium="2">2</md-layout-column-item>
                    <md-layout-column-item medium="6">6</md-layout-column-item>
                    <md-layout-column-item medium="3">3</md-layout-column-item>
                    <md-layout-column-item medium="5">5</md-layout-column-item>
                    <md-layout-column-item medium="4">4</md-layout-column-item>
                    <md-layout-column-item medium="4">4</md-layout-column-item>
                    <md-layout-column-item medium="8">8</md-layout-column-item>
                </md-layout-column>

            <!-- </div> -->
        `
    }
}

customElements.define("test-layout-column-medium", TestLayoutColumnMedium);

export default document.createElement("test-layout-column-medium");
