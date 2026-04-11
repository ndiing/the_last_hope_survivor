import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoCheckbox extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-form style="padding:24px;">
                <md-column>
                    <md-column-item expanded="12" medium="8" compact="4">
                        <md-checkbox name="checkbox0" value="checkbox0"></md-checkbox>
                        <md-checkbox name="checkbox0" value="checkbox1" indeterminate></md-checkbox>
                        <md-checkbox name="checkbox0" value="checkbox2" checked></md-checkbox>
                    </md-column-item>
                    <md-column-item expanded="12" medium="8" compact="4">
                        <md-checkbox name="checkbox1" value="checkbox0" disabled></md-checkbox>
                        <md-checkbox name="checkbox1" value="checkbox1" disabled indeterminate></md-checkbox>
                        <md-checkbox name="checkbox1" value="checkbox2" disabled checked></md-checkbox>
                    </md-column-item>
                    <md-column-item expanded="12" medium="8" compact="4">
                        <md-button type="reset" label="Reset"></md-button>
                        <md-button type="submit" label="Submit"></md-button>
                    </md-column-item>
                </md-column>
            </md-form>
        `
    }
}

customElements.define("demo-checkbox", DemoCheckbox);

export default document.createElement("demo-checkbox");
