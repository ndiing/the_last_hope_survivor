import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoAppBar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-app-bar></md-app-bar>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-app-bar", DemoAppBar);

export default document.createElement("demo-app-bar");
