import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestUser extends MDComponent{
    render(){
        return html`
            <h1>User</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('test-user', TestUser)

export default document.createElement('test-user')
