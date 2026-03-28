import { MDComponent } from "../component/component.js";

class MDBadge extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-badge", MDBadge);

export { MDBadge };
