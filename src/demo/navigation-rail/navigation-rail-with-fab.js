import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationRailWithFab extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout>

                <md-navigation-rail
                    .fab="${{icon:'edit', label:'Label'}}"
                    .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}" open></md-navigation-rail>

                <md-layout-item region="center" style="padding:24px;"></md-layout-item>

            </md-layout>
        `
    }
}

customElements.define("demo-navigation-rail-with-fab", DemoNavigationRailWithFab);

export default document.createElement("demo-navigation-rail-with-fab");
