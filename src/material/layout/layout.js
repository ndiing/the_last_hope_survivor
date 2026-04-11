import { html } from "lit";
import { MDComponent } from "../component/component.js";

class MDLayout extends MDComponent {
    render() {
        return html` ${this._childNodes} `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");

        if (!this._childNodes) {
            this._childNodes = Array.from(this.childNodes);
            this.replaceChildren();
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-layout", MDLayout);

export { MDLayout };
