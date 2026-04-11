import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoScrim extends MDComponent {
    get scrim() {
        return this.querySelector("#scrim");
    }

    _handleClick() {
        this.scrim.toggle();
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button @click="${this._handleClick}" label="Toggle"></md-button>
                    <md-scrim id="scrim"></md-scrim>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-scrim", DemoScrim);

export default document.createElement("demo-scrim");
