import { MDComponent } from "../component/component.js";

class MDAppBar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-app-bar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-app-bar", MDAppBar);

export { MDAppBar };
