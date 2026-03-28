import { MDComponent } from "../component/component.js";

class MDChip extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chip");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-chip", MDChip);

export { MDChip };
