import { MDComponent } from "../component/component.js";

class MDToolbar extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-toolbar");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-toolbar", MDToolbar);

export { MDToolbar };
