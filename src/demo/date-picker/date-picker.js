import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoDatePicker extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-date-picker></md-date-picker>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-date-picker", DemoDatePicker);

export default document.createElement("demo-date-picker");
