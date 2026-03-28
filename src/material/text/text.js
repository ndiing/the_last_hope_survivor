import { MDComponent } from "../component/component.js";

class MDText extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-text", MDText);

export { MDText };
