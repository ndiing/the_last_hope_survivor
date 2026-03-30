import { MDComponent } from "../component/component.js";

class MDTab extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tab");
    }
}

customElements.define("md-tab", MDTab);

export { MDTab };
