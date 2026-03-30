import { MDComponent } from "../component/component.js";

class MDFabMenu extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab-menu");
    }
}

customElements.define("md-fab-menu", MDFabMenu);

export { MDFabMenu };
