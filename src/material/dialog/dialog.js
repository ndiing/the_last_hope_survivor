import { MDComponent } from "../component/component.js";

class MDDialog extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog");
    }
}

customElements.define("md-dialog", MDDialog);

export { MDDialog };
