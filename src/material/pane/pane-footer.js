import { MDComponent } from "../component/component.js";

class MDPaneFooter extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane__footer");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-pane-footer", MDPaneFooter);

export { MDPaneFooter };
