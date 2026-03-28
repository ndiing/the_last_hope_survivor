import { MDComponent } from "../component/component.js";

class MDExample extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-example");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-example", MDExample);

export { MDExample };
