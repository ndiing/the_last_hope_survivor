import { MDComponent } from "../component/component.js";

class MDSplitButton extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-split-button");
    }
}

customElements.define("md-split-button", MDSplitButton);

export { MDSplitButton };
