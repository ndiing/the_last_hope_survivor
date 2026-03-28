import { MDComponent } from "../component/component.js";

class MDFabMenu extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab-menu");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-fab-menu", MDFabMenu);

export { MDFabMenu };
