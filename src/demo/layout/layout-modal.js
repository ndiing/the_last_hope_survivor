import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoLayoutBorderModal extends MDComponent {
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
            <md-layout >
                <md-layout-item id="north" region="north" modal>north</md-layout-item>
                <md-layout-item id="west" region="west" modal>west</md-layout-item>
                <md-layout-item region="center" style="padding:24px;">
                    <md-button @click="${this._handleNorthClick}" label="North Toggle"></md-button>
                    <md-button @click="${this._handleWestClick}" label="West Toggle"></md-button>
                    <md-button @click="${this._handleEastClick}" label="East Toggle"></md-button>
                    <md-button @click="${this._handleSouthClick}" label="South Toggle"></md-button>
                </md-layout-item>
                <md-layout-item id="east" region="east" modal>east</md-layout-item>
                <md-layout-item id="south" region="south" modal>south</md-layout-item>
            </md-layout>
        `
    }
}

customElements.define("demo-layout-border-modal", DemoLayoutBorderModal);

export default document.createElement("demo-layout-border-modal");
