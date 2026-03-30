import { MDComponent } from "../component/component.js";

class MDSearch extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-search");
    }
}

customElements.define("md-search", MDSearch);

export { MDSearch };
