import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoBadge extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout >
        
                <md-navigation-rail .items="${[
                    {id:'0',leading:[{component:'icon',icon:'image'}],label:'Lorem',selected:true},
                    {id:'1',leading:[{component:'icon',icon:'image'}],label:'ipsum',trailing:[{component:'badge',label:0}]},
                    {id:'2',leading:[{component:'icon',icon:'image'}],label:'dolor',trailing:[{component:'badge',label:3}]},
                    {id:'3',leading:[{component:'icon',icon:'image'}],label:'sit',trailing:[{component:'badge',label:3333}]},
                ]}" layout="vertical" open></md-navigation-rail>
                
                
                <md-layout-item region="center" style="padding:24px;">
                </md-layout-item>
            </md-layout>
        `
    }
}

customElements.define("demo-badge-on-navigation-rail", DemoBadge);

export default document.createElement("demo-badge-on-navigation-rail");
