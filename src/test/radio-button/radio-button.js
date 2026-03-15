import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestRadioButton extends MDComponent {
    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-form>
                <md-layout-column style="margin:24px;">

                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <md-radio-button name="radio-button" value="radio-button0"></md-radio-button><br><br>
                        <md-radio-button name="radio-button" value="radio-button1" checked></md-radio-button>
                    </md-layout-column-item>

                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <md-button label="reset" type="reset"></md-button>
                        <md-button label="submit" type="submit"></md-button>
                    </md-layout-column-item>
                    
                </md-layout-column>
            </md-form>
        `;
    }
}

customElements.define("test-radio-button", TestRadioButton);

export default document.createElement("test-radio-button");
