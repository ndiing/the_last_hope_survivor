import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import ordering from "./emoji_17_0_ordering.json";

function rgi(codepoints) {
    return codepoints.map((codepoint) => codepoint.toString(16).padStart(4, "0")).join("_");
}

function render(codepoints) {
    return codepoints.map((codepoint) => String.fromCodePoint(codepoint)).join("");
}

class DemoEmoji extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${ordering.map(emoji=>emoji.emoji).flat(Infinity).map(emoji=>html`<md-emoji src="https://fonts.gstatic.com/s/e/notoemoji/latest/${rgi(emoji.base)}/emoji.svg" alt="${render(emoji.base)}">${render(emoji.base)}</md-emoji>`)}
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-emoji", DemoEmoji);

export default document.createElement("demo-emoji");
