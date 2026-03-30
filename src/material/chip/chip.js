import { MDComponent } from "../component/component.js";

class MDChip extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chip");
    }
}

customElements.define("md-chip", MDChip);

export { MDChip };
