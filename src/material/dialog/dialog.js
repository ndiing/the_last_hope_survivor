import { MDComponent } from "../component/component.js";

class MDDialog extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-dialog", MDDialog);

export { MDDialog };
