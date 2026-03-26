import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { routes } from "../routes.js";

class TestMain extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div>
                <div routerLink="/">/</div>
                <div routerLink="/users">/users</div>
                <div routerLink="/users?param=1&param=2">/users?param=1&param=2</div>
                <div routerLink="/users/1">/users/1</div>
                <div routerLink="/users/1/survivor">/users/1/survivor</div>
                <div routerLink="/users/321/survivor">/users/321/survivor</div>
                <div routerLink="/blogs/">/blogs/</div>
                <div routerLink="/blogs/?param=1&param=2">/blogs/?param=1&param=2</div>
                <div routerLink="/blogs/1">/blogs/1</div>
                <div routerLink="/blogs/1/survivor">/blogs/1/survivor</div>
                <div routerLink="/blogs/321/survivor">/blogs/321/survivor</div>
                <div routerLink="/error">/error</div>
                <div routerLink="/layout">/layout</div>
            </div>

            <h1>Main</h1>
            <md-outlet name="user"></md-outlet> -->
            
            <md-layout-border>
                <md-layout-border-item region="west" open margin>
                    <div>
                        ${routes[0].children.map(route => html`
                            <div routerLink="${route.path}">${route.path}</div>
                        `)}
                    </div>
                </md-layout-border-item>
                <md-layout-border-item region="center" >
                    <md-outlet></md-outlet>
                </md-layout-border-item>
            </md-layout-border>
        `
    }
}

customElements.define("test-main", TestMain);

export default document.createElement("test-main");
