import { MDComponent } from "../component/component.js";

class MDPane extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-pane", MDPane);

export { MDPane };
