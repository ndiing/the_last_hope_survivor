import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestLayoutColumnExpanded extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->

                <md-layout-column>
                    <md-layout-column-item expanded="1">1</md-layout-column-item>
                    <md-layout-column-item expanded="11">11</md-layout-column-item>
                    <md-layout-column-item expanded="2">2</md-layout-column-item>
                    <md-layout-column-item expanded="10">10</md-layout-column-item>
                    <md-layout-column-item expanded="3">3</md-layout-column-item>
                    <md-layout-column-item expanded="9">9</md-layout-column-item>
                    <md-layout-column-item expanded="4">4</md-layout-column-item>
                    <md-layout-column-item expanded="8">8</md-layout-column-item>
                    <md-layout-column-item expanded="5">5</md-layout-column-item>
                    <md-layout-column-item expanded="7">7</md-layout-column-item>
                    <md-layout-column-item expanded="6">6</md-layout-column-item>
                    <md-layout-column-item expanded="6">6</md-layout-column-item>
                    <md-layout-column-item expanded="12">12</md-layout-column-item>
                </md-layout-column>

            <!-- </div> -->
        `
    }
}

customElements.define("test-layout-column-expanded", TestLayoutColumnExpanded);

export default document.createElement("test-layout-column-expanded");
