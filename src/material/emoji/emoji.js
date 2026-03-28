import { MDComponent } from "../component/component.js";

class MDEmoji extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-emoji");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-emoji", MDEmoji);

export { MDEmoji };
