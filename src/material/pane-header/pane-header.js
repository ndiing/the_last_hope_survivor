import { MDComponent } from "../component/component.js";

class MDPaneHeader extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane__header");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-pane-header", MDPaneHeader);

export { MDPaneHeader };
