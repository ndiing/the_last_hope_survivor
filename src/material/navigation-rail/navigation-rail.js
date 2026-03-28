import { MDComponent } from "../component/component.js";

class MDNavigationRail extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-navigation-rail", MDNavigationRail);

export { MDNavigationRail };
