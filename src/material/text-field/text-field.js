import { MDComponent } from "../component/component.js";

class MDTextField extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-text-field", MDTextField);

export { MDTextField };
