import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutColumnMedium extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item medium="1">1</md-column-item>
                <md-column-item medium="7">7</md-column-item>
                <md-column-item medium="2">2</md-column-item>
                <md-column-item medium="6">6</md-column-item>
                <md-column-item medium="3">3</md-column-item>
                <md-column-item medium="5">5</md-column-item>
                <md-column-item medium="4">4</md-column-item>
                <md-column-item medium="4">4</md-column-item>
                <md-column-item medium="8">8</md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-layout-column-medium", DemoLayoutColumnMedium);

export default document.createElement("demo-layout-column-medium");
