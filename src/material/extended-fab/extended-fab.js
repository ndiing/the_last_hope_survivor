import { MDComponent } from "../component/component.js";

class MDExtendedFab extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-extended-fab");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-extended-fab", MDExtendedFab);

export { MDExtendedFab };
