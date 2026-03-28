import { MDComponent } from "../component/component.js";

class MDTooltip extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tooltip");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-tooltip", MDTooltip);

export { MDTooltip };
