import { MDComponent } from "../component/component.js";

class MDToolbar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-toolbar");
    }
}

customElements.define("md-toolbar", MDToolbar);

export { MDToolbar };
