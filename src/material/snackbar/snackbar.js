import { MDComponent } from "../component/component.js";

class MDSnackbar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-snackbar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-snackbar", MDSnackbar);

export { MDSnackbar };
