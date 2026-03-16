import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestSwitch extends MDComponent {
    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-form>
                <md-layout-column >

                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <md-switch name="switch" value="switch0"></md-switch><br><br>
                        <md-switch name="switch" value="switch1" checked></md-switch>
                    </md-layout-column-item>

                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <md-switch name="switch1" value="switch0"></md-switch>
                        <md-switch name="switch1" value="switch1" checked></md-switch><br><br>
                        
                        <md-switch name="switch2" value="switch0" icons='["","check"]'></md-switch>
                        <md-switch name="switch2" value="switch1" icons='["","check"]' checked></md-switch><br><br>

                        <md-switch name="switch3" value="switch0" icons='["close","check"]'></md-switch>
                        <md-switch name="switch3" value="switch1" icons='["close","check"]' checked></md-switch>
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

customElements.define("test-switch", TestSwitch);

export default document.createElement("test-switch");
