import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoRipple extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <md-ripple></md-ripple>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-ripple", DemoRipple);

export default document.createElement("demo-ripple");
