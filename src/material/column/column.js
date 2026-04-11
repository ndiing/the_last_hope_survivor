import { MDComponent } from "../component/component.js";

class MDColumn extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-column");
    }
}

customElements.define("md-column", MDColumn);

export { MDColumn };
