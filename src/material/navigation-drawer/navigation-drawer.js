import { MDComponent } from "../component/component.js";

class MDNavigationDrawer extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawer);

export { MDNavigationDrawer };
