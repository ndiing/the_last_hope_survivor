import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSlider extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-slider></md-slider>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-slider", DemoSlider);

export default document.createElement("demo-slider");
