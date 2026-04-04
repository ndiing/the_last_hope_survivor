import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationBar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-bar .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}" layout="vertical"></md-navigation-bar>
                </md-layout-column-item>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-navigation-bar .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}" layout="horizontal"></md-navigation-bar>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-bar .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:0}]},
                    ]}" layout="vertical"></md-navigation-bar>
                </md-layout-column-item>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-navigation-bar .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:0}]},
                    ]}" layout="horizontal"></md-navigation-bar>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-navigation-bar", DemoNavigationBar);

export default document.createElement("demo-navigation-bar");
