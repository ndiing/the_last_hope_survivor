import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTimePicker extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-time-picker></md-time-picker>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-time-picker", DemoTimePicker);

export default document.createElement("demo-time-picker");
