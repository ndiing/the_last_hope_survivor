import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoList extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'0',leading:[{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {id:'1',leading:[{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text'},
                            {id:'2',leading:[{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'3',leading:[{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {id:'4',leading:[{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {id:'5',leading:[{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'6',leading:[{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {id:'7',leading:[{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text'},
                            {id:'8',leading:[{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'9',leading:[{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {id:'10',leading:[{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {id:'11',leading:[{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'12',leading:[{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {id:'13',leading:[{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text'},
                            {id:'14',leading:[{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'15',leading:[{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {id:'16',leading:[{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {id:'17',leading:[{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'}],label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'18',leading:[{component:'icon',icon:'image'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {id:'19',leading:[{component:'icon',icon:'image'}],label:'Label text',supportingText:'Supporting text'},
                            {id:'20',leading:[{component:'icon',icon:'image'}],label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'21',leading:[{component:'icon',icon:'image'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {id:'22',leading:[{component:'icon',icon:'image'}],label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {id:'23',leading:[{component:'icon',icon:'image'}],label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'24',label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {id:'25',label:'Label text',supportingText:'Supporting text'},
                            {id:'26',label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'27',label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'text',text:'100+'}]},
                            {id:'28',label:'Label text',supportingText:'Supporting text',trailing:[{component:'text',text:'100+'}]},
                            {id:'29',label:'Label text',trailing:[{component:'text',text:'100+'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'30',leading:[{component:'checkbox'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {id:'31',leading:[{component:'checkbox'}],label:'Label text',supportingText:'Supporting text'},
                            {id:'32',leading:[{component:'checkbox'}],label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'33',leading:[{component:'checkbox'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'text',text:'100+'}]},
                            {id:'34',leading:[{component:'checkbox'}],label:'Label text',supportingText:'Supporting text',trailing:[{component:'text',text:'100+'}]},
                            {id:'35',leading:[{component:'checkbox'}],label:'Label text',trailing:[{component:'text',text:'100+'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'36',leading:[{component:'radio-button'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {id:'37',leading:[{component:'radio-button'}],label:'Label text',supportingText:'Supporting text'},
                            {id:'38',leading:[{component:'radio-button'}],label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'39',leading:[{component:'radio-button'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'text',text:'100+'}]},
                            {id:'40',leading:[{component:'radio-button'}],label:'Label text',supportingText:'Supporting text',trailing:[{component:'text',text:'100+'}]},
                            {id:'41',leading:[{component:'radio-button'}],label:'Label text',trailing:[{component:'text',text:'100+'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'42',label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'switch'}]},
                            {id:'43',label:'Label text',supportingText:'Supporting text',trailing:[{component:'switch'}]},
                            {id:'44',label:'Label text',trailing:[{component:'switch'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {id:'45',leading:[{component:'icon',icon:'image'}],label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'switch'}]},
                            {id:'46',leading:[{component:'icon',icon:'image'}],label:'Label text',supportingText:'Supporting text',trailing:[{component:'switch'}]},
                            {id:'47',leading:[{component:'icon',icon:'image'}],label:'Label text',trailing:[{component:'switch'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-list", DemoList);

export default document.createElement("demo-list");
