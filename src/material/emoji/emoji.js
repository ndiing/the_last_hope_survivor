import { MDComponent } from "../component/component.js";

class MDEmoji extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-emoji");
    }
}

customElements.define("md-emoji", MDEmoji);

export { MDEmoji };
