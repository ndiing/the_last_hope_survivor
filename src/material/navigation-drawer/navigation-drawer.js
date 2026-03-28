import { MDComponent } from "../component/component.js";

class MDNavigationDrawer extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawer);

export { MDNavigationDrawer };
