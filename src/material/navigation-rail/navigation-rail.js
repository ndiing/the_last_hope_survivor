import { MDComponent } from "../component/component.js";

class MDNavigationRail extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
