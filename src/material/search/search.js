import { MDComponent } from "../component/component.js";

class MDSearch extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-search");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-search", MDSearch);

export { MDSearch };
