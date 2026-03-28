import { MDComponent } from "../component/component.js";

class MDLoadingIndicator extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-loading-indicator");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-loading-indicator", MDLoadingIndicator);

export { MDLoadingIndicator };
