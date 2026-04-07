import { MDComponent } from "../component/component.js";

class MDLayoutBody extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout__body");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-layout-body", MDLayoutBody);

export { MDLayoutBody };
