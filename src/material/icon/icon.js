import { MDComponent } from "../component/component.js";

class MDIcon extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-icon", MDIcon);

export { MDIcon };
