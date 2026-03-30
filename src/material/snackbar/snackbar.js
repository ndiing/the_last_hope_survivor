import { MDComponent } from "../component/component.js";

class MDSnackbar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-snackbar");
    }
}

customElements.define("md-snackbar", MDSnackbar);

export { MDSnackbar };
