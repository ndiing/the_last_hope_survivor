import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { routes } from "../routes.js";
import { router } from "../demo.js";

class DemoMain extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-border>
                <md-layout-border-item region="west" open>
                    <md-list 
                        selection
                        mode="single-select"
                        .items="${this.items}"></md-list>
                </md-layout-border-item>
                <md-layout-border-item region="center" style="padding:24px;"><md-outlet></md-outlet></md-layout-border-item>
            </md-layout-border>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.items = routes[0].children
            .map((route) => ({
                ...route,
                routerLink: route.path,
                selected: route.path === router.path,
            }))
            .sort((a, b) => {
                return a.label.localeCompare(b.label);
            });
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");
