import { MDComponent } from "../component/component.js";

class MDMenu extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-menu");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-menu", MDMenu);

export { MDMenu };
