import { MDComponent } from "../component/component.js";

class MDSlider extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-slider");
    }
}

customElements.define("md-slider", MDSlider);

export { MDSlider };
