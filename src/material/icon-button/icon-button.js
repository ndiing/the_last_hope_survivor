import { MDComponent } from "../component/component.js";

class MDIconButton extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-icon-button", MDIconButton);

export { MDIconButton };
