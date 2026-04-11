import { MDComponent } from "../component/component.js";

class MDPaneBody extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane__body");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-pane-body", MDPaneBody);

export { MDPaneBody };
