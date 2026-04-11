import { MDComponent } from "../component/component.js";

class MDLayout extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");
    }
}

customElements.define("md-layout", MDLayout);

export { MDLayout };
