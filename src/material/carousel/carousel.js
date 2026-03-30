import { MDComponent } from "../component/component.js";

class MDCarousel extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-carousel");
    }
}

customElements.define("md-carousel", MDCarousel);

export { MDCarousel };
