import { MDComponent } from "../component/component.js";

class MDTest extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-test");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-test", MDTest);

export { MDTest };
