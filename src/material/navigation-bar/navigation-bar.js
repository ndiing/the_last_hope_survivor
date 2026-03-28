import { MDComponent } from "../component/component.js";

class MDNavigationBar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
