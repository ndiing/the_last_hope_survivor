import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestTheLastHopeSurvivor extends MDComponent{
    render(){
        /* prettier-ignore */
        return html`
            <h1>TheLastHopeSurvivor</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('test-the-last-hope-survivor',TestTheLastHopeSurvivor)

export default document.createElement('test-the-last-hope-survivor')