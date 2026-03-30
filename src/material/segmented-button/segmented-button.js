import { MDComponent } from "../component/component.js";

class MDSegmentedButton extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-segmented-button");
    }
}

customElements.define("md-segmented-button", MDSegmentedButton);

export { MDSegmentedButton };
