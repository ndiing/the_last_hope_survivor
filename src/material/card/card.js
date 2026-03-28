import { MDComponent } from "../component/component.js";

class MDCard extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-card", MDCard);

export { MDCard };
