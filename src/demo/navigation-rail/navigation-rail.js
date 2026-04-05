import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoNavigationRail extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Lorem',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'ipsum',trailing:[{component:'badge',label:0}]},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'dolor',trailing:[{component:'badge',label:3}]},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'sit',trailing:[{component:'badge',label:123}]},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Lorem',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'ipsum',trailing:[{component:'badge',label:0}]},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'dolor',trailing:[{component:'badge',label:3}]},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'sit',trailing:[{component:'badge',label:123}]},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2',trailing:[{component:'badge',label:0}]},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:123}]},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2',trailing:[{component:'badge',label:0}]},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:123}]},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .fab="${{icon:'edit'}}"
                    .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2',trailing:[{component:'badge',label:0}]},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:123}]},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .fab="${{icon:'edit', label:'Label'}}"
                    .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2',trailing:[{component:'badge',label:0}]},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:123}]},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .fab="${{icon:'edit'}}"
                    .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2',trailing:[{component:'badge',label:0}]},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:123}]},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .fab="${{icon:'edit', label:'Label'}}"
                    .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2',trailing:[{component:'badge',label:0}]},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3',trailing:[{component:'badge',label:3}]},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4',trailing:[{component:'badge',label:123}]},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

                <!--  -->

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .fab="${{icon:'edit'}}"
                    .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .fab="${{icon:'edit', label:'Label'}}"
                    .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .fab="${{icon:'edit'}}"
                    .items="${[
                        {id:'0',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'1',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'2',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'3',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}"></md-navigation-rail>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="8" compact="4">
                    <md-navigation-rail style="height:480px;" 
                    .iconButton="${{icon:['menu','menu_open']}}" 
                    .fab="${{icon:'edit', label:'Label'}}"
                    .items="${[
                        {id:'4',leading:[{component:'icon',icon:'image'}],label:'Item 1',selected:true},
                        {id:'5',leading:[{component:'icon',icon:'image'}],label:'Item 2'},
                        {id:'6',leading:[{component:'icon',icon:'image'}],label:'Item 3'},
                        {id:'7',leading:[{component:'icon',icon:'image'}],label:'Item 4'},
                    ]}" expanded></md-navigation-rail>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-navigation-rail", DemoNavigationRail);

export default document.createElement("demo-navigation-rail");
