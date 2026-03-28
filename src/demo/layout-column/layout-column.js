import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutColumn extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="1" medium="1" compact="1">1/1/1</md-layout-column-item>
                <md-layout-column-item expanded="11" medium="7" compact="3">11/7/3</md-layout-column-item>
                <md-layout-column-item expanded="2" medium="2" compact="2">2/2/2</md-layout-column-item>
                <md-layout-column-item expanded="10" medium="6" compact="2">10/6/2</md-layout-column-item>
                <md-layout-column-item expanded="3" medium="3" compact="3">3/3/3</md-layout-column-item>
                <md-layout-column-item expanded="9" medium="5" compact="1">9/5/1</md-layout-column-item>
                <md-layout-column-item expanded="4" medium="4" compact="4">4/4/4</md-layout-column-item>
                <md-layout-column-item expanded="8" medium="4" compact="1">8/4/1</md-layout-column-item>
                <md-layout-column-item expanded="5" medium="5" compact="3">5/5/3</md-layout-column-item>
                <md-layout-column-item expanded="7" medium="3" compact="2">7/3/2</md-layout-column-item>
                <md-layout-column-item expanded="6" medium="6" compact="2">6/6/2</md-layout-column-item>
                <md-layout-column-item expanded="6" medium="2" compact="3">6/2/3</md-layout-column-item>
                <md-layout-column-item expanded="12" medium="8" compact="1">12/8/1</md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-layout-column", DemoLayoutColumn);

export default document.createElement("demo-layout-column");
