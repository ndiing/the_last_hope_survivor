import { MDComponent } from "../component/component.js";

class MDMenu extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-menu");
    }
}

customElements.define("md-menu", MDMenu);

export { MDMenu };
