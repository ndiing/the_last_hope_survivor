import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestUsers extends MDComponent{
    render(){
        return html`
            <h1>Users</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('test-users', TestUsers)

export default document.createElement('test-users')
