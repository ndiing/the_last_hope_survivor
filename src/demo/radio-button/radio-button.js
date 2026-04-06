import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoRadioButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-form>
                <md-layout-column>
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <md-radio-button name="radio-button0" value="radio-button0"></md-radio-button>
                        <md-radio-button name="radio-button0" value="radio-button1" checked></md-radio-button>
                    </md-layout-column-item>
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <md-radio-button name="radio-button1" value="radio-button0" disabled></md-radio-button>
                        <md-radio-button name="radio-button1" value="radio-button1" disabled checked></md-radio-button>
                    </md-layout-column-item>
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <md-button type="reset" label="Reset"></md-button>
                        <md-button type="submit" label="Submit"></md-button>
                    </md-layout-column-item>
                </md-layout-column>
            </md-form>
        `
    }
}

customElements.define("demo-radio-button", DemoRadioButton);

export default document.createElement("demo-radio-button");
