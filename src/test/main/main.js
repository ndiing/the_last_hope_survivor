import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestMain extends MDComponent{
    render(){
        return html`
            <div>
                <div routerLink="">/</div>
                <div routerLink="users/">/users/</div>
                <div routerLink="users?age=35&age=36">/users?age=35&age=36</div>
                <div routerLink="users/1">/users/1</div>
                <div routerLink="blogs">/blogs</div>
                <div routerLink="blogs/1">/blogs/1</div>
                <div routerLink="not-found">/not-found</div>
            </div>
            <h1>Main</h1>
            <md-outlet name="outlet"></md-outlet>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('test-main', TestMain)

export default document.createElement('test-main')
