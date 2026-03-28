import { MDComponent } from "../component/component.js";

class MDCarousel extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-carousel");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-carousel", MDCarousel);

export { MDCarousel };
