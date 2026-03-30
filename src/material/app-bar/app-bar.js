import { MDComponent } from "../component/component.js";

class MDAppBar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-app-bar");
    }
}

customElements.define("md-app-bar", MDAppBar);

export { MDAppBar };
