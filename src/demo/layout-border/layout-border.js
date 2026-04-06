import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutBorder extends MDComponent {
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

    _handleNorthClick() {
        this.north.toggle();
    }
    _handleWestClick() {
        this.west.toggle();
    }
    _handleEastClick() {
        this.east.toggle();
    }
    _handleSouthClick() {
        this.south.toggle();
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-layout-border >
                <md-layout-border-item id="north" region="north">north</md-layout-border-item>
                <md-layout-border-item id="west" region="west">west</md-layout-border-item>
                <md-layout-border-item region="center" style="padding:24px;">
                    <md-button @click="${this._handleNorthClick}" label="North Toggle"></md-button>
                    <md-button @click="${this._handleWestClick}" label="West Toggle"></md-button>
                    <md-button @click="${this._handleEastClick}" label="East Toggle"></md-button>
                    <md-button @click="${this._handleSouthClick}" label="South Toggle"></md-button>
                </md-layout-border-item>
                <md-layout-border-item id="east" region="east">east</md-layout-border-item>
                <md-layout-border-item id="south" region="south">south</md-layout-border-item>
            </md-layout-border>
        `
    }
}

customElements.define("demo-layout-border", DemoLayoutBorder);

export default document.createElement("demo-layout-border");
