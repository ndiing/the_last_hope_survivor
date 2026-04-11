import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import codepoints from "./MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].codepoints.json";

class DemoIcon extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    ${codepoints.map(codepoint=>html`<md-icon>${codepoint[0]}</md-icon>`)}
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-icon", DemoIcon);

export default document.createElement("demo-icon");
