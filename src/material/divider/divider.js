import { MDComponent } from "../component/component.js";

class MDDivider extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-divider");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-divider", MDDivider);

export { MDDivider };
