import { MDComponent } from "../component/component.js";

class MDNavigationBar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-bar");
    }
}

customElements.define("md-navigation-bar", MDNavigationBar);

export { MDNavigationBar };
