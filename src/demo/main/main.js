import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { router } from "../demo.js";
import { BreakpointObserver } from "../../material/observer/observer.js";

class DemoMain extends MDComponent {
    static properties={
        open:{state:true}
    }

    constructor(){
        super()
        this.open=true
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-layout>
                <md-navigation-drawer 
                    .items="${this.items}"
                    inputFormat="nested"
                    .open="${this.open}"
                ></md-navigation-drawer>
                <md-layout-item region="center">
                    <md-pane fit sticky>
                        <md-pane-body style="padding:0;"><md-outlet></md-outlet></md-pane-body>
                    </md-pane>
                </md-layout-item>
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

        this._breakpoint=new BreakpointObserver((item) => {
            if(item.name==='compact'){
                this.open=false;
            }
            else if(item.name==='medium'){
                this.open=false;
            }
            else if(item.name==='expanded'){
                this.open=true
            }
        })
        this._breakpoint.observe()
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");
