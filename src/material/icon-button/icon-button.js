import { MDComponent } from "../component/component.js";

class MDIconButton extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");
    }
}

customElements.define("md-icon-button", MDIconButton);

export { MDIconButton };
