import { MDComponent } from "../component/component.js";

class MDProgressIndicator extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-progress-indicator");
    }
}

customElements.define("md-progress-indicator", MDProgressIndicator);

export { MDProgressIndicator };
