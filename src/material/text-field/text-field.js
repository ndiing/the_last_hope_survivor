import { MDComponent } from "../component/component.js";

class MDTextField extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
    }
}

customElements.define("md-text-field", MDTextField);

export { MDTextField };
