import { MDComponent } from "../component/component.js";

class MDButton extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-button", MDButton);

export { MDButton };
