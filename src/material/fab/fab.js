import { MDComponent } from "../component/component.js";

class MDFab extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab");
    }
}

customElements.define("md-fab", MDFab);

export { MDFab };
