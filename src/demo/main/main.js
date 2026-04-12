import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { router } from "../demo.js";

class DemoMain extends MDComponent {

    render() {
        /* prettier-ignore */
        return html`
            <md-layout>
                <md-navigation-drawer 
                    .items="${this.items}"
                    inputFormat="nested"
                    open
                ></md-navigation-drawer>
                <md-layout-item region="center"><md-outlet></md-outlet></md-layout-item>
            </md-layout>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.items = router.routes[0].children.map((item, index) => {
            item.id = index;
            item.label = item.path;
            item.routerLink = item.path;
            
            return item;
        });

        const sort = (items) =>
            items.sort((a, b) => {
                const aHasChildren = a.children && a.children.length > 0;
                const bHasChildren = b.children && b.children.length > 0;

                if (aHasChildren && !bHasChildren) return -1;
                if (!aHasChildren && bHasChildren) return 1;

                return a.label.localeCompare(b.label);
            });

        const walk = (item) => {
            item.selected = router.path === item.routerLink;
            if (item.children?.length) {
                sort(item.children).forEach((item) => walk(item));
            }
        };
        
        sort(this.items).forEach((item) => walk(item));
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");
