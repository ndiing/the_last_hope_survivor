import { MDComponent } from "../component/component.js";

class MDDatePicker extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-date-picker");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
