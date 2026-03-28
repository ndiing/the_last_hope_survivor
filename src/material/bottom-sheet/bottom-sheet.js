import { MDComponent } from "../component/component.js";

class MDBottomSheet extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-bottom-sheet");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-bottom-sheet", MDBottomSheet);

export { MDBottomSheet };
