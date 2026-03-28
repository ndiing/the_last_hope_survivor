import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoSwitch extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-form>
                <md-layout-column>
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <md-switch name="switch0" value="switch0"></md-switch>
                        <md-switch name="switch1" value="switch1" checked></md-switch><br><br>
                        
                        <md-switch name="switch2" value="switch2" icons='["","check"]'></md-switch>
                        <md-switch name="switch3" value="switch3" checked icons='["","check"]'></md-switch><br><br>

                        <md-switch name="switch4" value="switch4" icons='["close","check"]'></md-switch>
                        <md-switch name="switch5" value="switch5" checked icons='["close","check"]'></md-switch><br><br>

                    </md-layout-column-item>
                    <md-layout-column-item expanded="12" medium="8" compact="4">
                        <button type="reset">reset</button>
                        <button type="submit">submit</button>
                    </md-layout-column-item>
                </md-layout-column>
            </md-form>
        `
    }
}

customElements.define("demo-switch", DemoSwitch);

export default document.createElement("demo-switch");
