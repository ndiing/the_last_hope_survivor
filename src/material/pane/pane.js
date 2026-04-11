import { html } from "lit";
import { MDComponent } from "../component/component.js";

class MDPane extends MDComponent {
    render() {
        return html` ${this._childNodes} `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");

        if (!this._childNodes) {
            this._childNodes = Array.from(this.childNodes);
            this.replaceChildren();
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-pane", MDPane);

export { MDPane };
