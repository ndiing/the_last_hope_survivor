import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationBarVertical extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout >
                <md-layout-item region="center">
                    <md-pane fit sticky>
                        <md-pane-body></md-pane-body>
                        
                        <md-navigation-bar .items="${[
                            {id:'0',leading:[{component:'icon',icon:'image'}],label:'Lorem',selected:true},
                            {id:'1',leading:[{component:'icon',icon:'image'}],label:'ipsum'},
                            {id:'2',leading:[{component:'icon',icon:'image'}],label:'dolor'},
                            {id:'3',leading:[{component:'icon',icon:'image'}],label:'sit'},
                        ]}" layout="vertical"></md-navigation-bar>
                        
                    </md-pane>
                </md-layout-item>
            </md-layout>
        `
    }
}

customElements.define("demo-navigation-bar-vertical", DemoNavigationBarVertical);

export default document.createElement("demo-navigation-bar-vertical");
