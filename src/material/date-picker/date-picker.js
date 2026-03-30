import { MDComponent } from "../component/component.js";

class MDDatePicker extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-date-picker");
    }
}

customElements.define("md-date-picker", MDDatePicker);

export { MDDatePicker };
