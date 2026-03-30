import { MDComponent } from "../component/component.js";

class MDBottomSheet extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-bottom-sheet");
    }
}

customElements.define("md-bottom-sheet", MDBottomSheet);

export { MDBottomSheet };
