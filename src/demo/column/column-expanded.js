import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutColumnExpanded extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="1">1</md-column-item>
                <md-column-item expanded="11">11</md-column-item>
                <md-column-item expanded="2">2</md-column-item>
                <md-column-item expanded="10">10</md-column-item>
                <md-column-item expanded="3">3</md-column-item>
                <md-column-item expanded="9">9</md-column-item>
                <md-column-item expanded="4">4</md-column-item>
                <md-column-item expanded="8">8</md-column-item>
                <md-column-item expanded="5">5</md-column-item>
                <md-column-item expanded="7">7</md-column-item>
                <md-column-item expanded="6">6</md-column-item>
                <md-column-item expanded="6">6</md-column-item>
                <md-column-item expanded="12">12</md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-layout-column-expanded", DemoLayoutColumnExpanded);

export default document.createElement("demo-layout-column-expanded");
