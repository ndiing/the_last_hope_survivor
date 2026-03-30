import { MDComponent } from "../component/component.js";

class MDDivider extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-divider");
    }
}

customElements.define("md-divider", MDDivider);

export { MDDivider };
