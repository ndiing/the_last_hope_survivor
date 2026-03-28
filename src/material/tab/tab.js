import { MDComponent } from "../component/component.js";

class MDTab extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tab");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-tab", MDTab);

export { MDTab };
