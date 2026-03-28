import { MDComponent } from "../component/component.js";

class MDSegmentedButton extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-segmented-button");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-segmented-button", MDSegmentedButton);

export { MDSegmentedButton };
