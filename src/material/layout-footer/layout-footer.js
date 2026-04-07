import { MDComponent } from "../component/component.js";

class MDLayoutFooter extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__footer");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-layout-footer", MDLayoutFooter);

export { MDLayoutFooter };
