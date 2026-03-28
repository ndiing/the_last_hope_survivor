import { MDComponent } from "../component/component.js";

class MDTimePicker extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-time-picker");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
