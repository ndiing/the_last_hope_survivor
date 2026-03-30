import { MDComponent } from "../component/component.js";

class MDLoadingIndicator extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-loading-indicator");
    }
}

customElements.define("md-loading-indicator", MDLoadingIndicator);

export { MDLoadingIndicator };
