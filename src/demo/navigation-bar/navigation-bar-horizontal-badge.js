import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationBarHorizontalBadge extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout >
                <md-layout-item region="center">
                    <md-pane>
                        <md-pane-header>header</md-pane-header>
                        <md-pane-body>body</md-pane-body>
                        
                        <md-navigation-bar .items="${[
                            {id:'0',leading:[{component:'icon',icon:'image'}],label:'Lorem',selected:true},
                            {id:'1',leading:[{component:'icon',icon:'image'}],label:'ipsum',trailing:[{component:'badge',label:0}]},
                            {id:'2',leading:[{component:'icon',icon:'image'}],label:'dolor',trailing:[{component:'badge',label:3}]},
                            {id:'3',leading:[{component:'icon',icon:'image'}],label:'sit',trailing:[{component:'badge',label:3333}]},
                        ]}" layout="horizontal"></md-navigation-bar>
                        
                    </md-pane>
                </md-layout-item>
            </md-layout>
        `
    }
}

customElements.define("demo-navigation-bar-horizontal-badge", DemoNavigationBarHorizontalBadge);

export default document.createElement("demo-navigation-bar-horizontal-badge");
