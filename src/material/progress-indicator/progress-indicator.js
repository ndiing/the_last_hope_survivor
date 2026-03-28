import { MDComponent } from "../component/component.js";

class MDProgressIndicator extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-progress-indicator");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-progress-indicator", MDProgressIndicator);

export { MDProgressIndicator };
