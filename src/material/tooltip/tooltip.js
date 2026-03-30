import { MDComponent } from "../component/component.js";

class MDTooltip extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tooltip");
    }
}

customElements.define("md-tooltip", MDTooltip);

export { MDTooltip };
