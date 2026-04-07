import { MDComponent } from "../component/component.js";

class MDLayoutHeader extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__header");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-layout-header", MDLayoutHeader);

export { MDLayoutHeader };
