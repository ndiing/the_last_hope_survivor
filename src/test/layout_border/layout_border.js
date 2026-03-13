import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestLayoutBorder extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->
                <md-layout-border>
                    <md-layout-border-item id="north" region="north">north</md-layout-border-item>
                    <md-layout-border-item id="west" region="west">west</md-layout-border-item>
                    <md-layout-border-item region="center">
                        <button @click="${this.handleNorthToggle}">north toggle</button><br>
                        <button @click="${this.handleWestToggle}">west toggle</button><br>
                        <button @click="${this.handleEastToggle}">east toggle</button><br>
                        <button @click="${this.handleSouthToggle}">south toggle</button><br>
                    </md-layout-border-item>
                    <md-layout-border-item id="east" region="east">east</md-layout-border-item>
                    <md-layout-border-item id="south" region="south">south</md-layout-border-item>
                </md-layout-border>
                
            <!-- </div> -->
        `
    }

    get north() {
        return this.querySelector("#north");
    }
    get west() {
        return this.querySelector("#west");
    }
    get east() {
        return this.querySelector("#east");
    }
    get south() {
        return this.querySelector("#south");
    }

    handleNorthToggle() {
        this.north.toggle();
    }
    handleWestToggle() {
        this.west.toggle();
    }
    handleEastToggle() {
        this.east.toggle();
    }
    handleSouthToggle() {
        this.south.toggle();
    }
}

customElements.define("test-layout-border", TestLayoutBorder);

export default document.createElement("test-layout-border");
