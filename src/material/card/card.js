import { MDComponent } from "../component/component.js";

class MDCard extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
    }
}

customElements.define("md-card", MDCard);

export { MDCard };
