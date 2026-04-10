import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationBarHorizontalBadge extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-border >
                <md-layout-border-item region="center">
                    <md-layout>
                        <md-layout-header>header</md-layout-header>
                        <md-layout-body>body</md-layout-body>
                        
                        <md-navigation-bar .items="${[
                            {id:'0',leading:[{component:'icon',icon:'image'}],label:'Lorem',selected:true},
                            {id:'1',leading:[{component:'icon',icon:'image'}],label:'ipsum',trailing:[{component:'badge',label:0}]},
                            {id:'2',leading:[{component:'icon',icon:'image'}],label:'dolor',trailing:[{component:'badge',label:3}]},
                            {id:'3',leading:[{component:'icon',icon:'image'}],label:'sit',trailing:[{component:'badge',label:3333}]},
                        ]}" layout="horizontal"></md-navigation-bar>
                        
                    </md-layout>
                </md-layout-border-item>
            </md-layout-border>
        `
    }
}

customElements.define("demo-navigation-bar-horizontal-badge", DemoNavigationBarHorizontalBadge);

export default document.createElement("demo-navigation-bar-horizontal-badge");
