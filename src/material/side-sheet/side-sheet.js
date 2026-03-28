import { MDComponent } from "../component/component.js";

class MDSideSheet extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-side-sheet");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-side-sheet", MDSideSheet);

export { MDSideSheet };
