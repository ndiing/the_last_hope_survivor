import { MDComponent } from "../component/component.js";

class MDLayoutBorder extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout-border");
    }
}

customElements.define("md-layout-border", MDLayoutBorder);

export { MDLayoutBorder };
