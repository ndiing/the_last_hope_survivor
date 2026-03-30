import { MDComponent } from "../component/component.js";

class MDExtendedFab extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-extended-fab");
    }
}

customElements.define("md-extended-fab", MDExtendedFab);

export { MDExtendedFab };
