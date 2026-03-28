import { MDComponent } from "../component/component.js";

class MDSlider extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-slider");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-slider", MDSlider);

export { MDSlider };
