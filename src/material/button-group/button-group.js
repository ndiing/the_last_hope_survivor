import { MDComponent } from "../component/component.js";

class MDButtonGroup extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button-group");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-button-group", MDButtonGroup);

export { MDButtonGroup };
