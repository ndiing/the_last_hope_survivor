import { nothing } from "lit";
import { MDComponent } from "../component/component.js";

class MDBadge extends MDComponent {
    static properties = {
        label: { type: Number },
        max: { type: Number },
    };

    constructor() {
        super();
        this.label = 0;
        this.max = 999;
    }

    render() {
        return this.label > 0 ? (this.label > this.max ? this.max + "+" : this.label) : nothing;
    }

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
