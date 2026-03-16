import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestCheckbox extends MDComponent {
    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-form>
                <md-layout-column >

                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <md-checkbox name="checkbox" value="checkbox0"></md-checkbox><br><br>
                        <md-checkbox name="checkbox" value="checkbox1" indeterminate></md-checkbox><br><br>
                        <md-checkbox name="checkbox" value="checkbox2" checked></md-checkbox>
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

customElements.define("test-checkbox", TestCheckbox);

export default document.createElement("test-checkbox");
