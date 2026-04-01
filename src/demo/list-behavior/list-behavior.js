import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoListBehavior extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>

            
                
            
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list0"
                        .items="${[
                            {id:'0',label:"List item 0"},
                            {id:'1',label:"List item 1"},
                            {id:'2',label:"List item 2"},
                            {id:'3',label:"List item 3"},
                            {id:'4',label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list1"
                        .interactive="${false}"
                        .items="${[
                            {id:'5',label:"List item 0"},
                            {id:'6',label:"List item 1"},
                            {id:'7',label:"List item 2"},
                            {id:'8',label:"List item 3"},
                            {id:'9',label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list2"
                        selection
                        mode="single-select"
                        .items="${[
                            {id:'10',label:"List item 0"},
                            {id:'11',label:"List item 1"},
                            {id:'12',label:"List item 2"},
                            {id:'13',label:"List item 3"},
                            {id:'14',label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {id:'15',label:"List item 0"},
                            {id:'16',label:"List item 1"},
                            {id:'17',label:"List item 2"},
                            {id:'18',label:"List item 3"},
                            {id:'19',label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list2"
                        selection
                        mode="single-select"
                        .items="${[
                            {id:'20',leading:[{component:'radio-button'}],label:"List item 0",selected:true},
                            {id:'21',leading:[{component:'radio-button'}],label:"List item 1"},
                            {id:'22',leading:[{component:'radio-button'}],label:"List item 2"},
                            {id:'23',leading:[{component:'radio-button'}],label:"List item 3"},
                            {id:'24',leading:[{component:'radio-button'}],label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {id:'25',leading:[{component:'checkbox'}],label:"List item 0",selected:true},
                            {id:'26',leading:[{component:'checkbox'}],label:"List item 1",selected:true},
                            {id:'27',leading:[{component:'checkbox'}],label:"List item 2"},
                            {id:'28',leading:[{component:'checkbox'}],label:"List item 3"},
                            {id:'29',leading:[{component:'checkbox'}],label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {id:'30',leading:[{component:'switch'}],label:"List item 0",selected:true},
                            {id:'31',leading:[{component:'switch'}],label:"List item 1",selected:true},
                            {id:'32',leading:[{component:'switch'}],label:"List item 2"},
                            {id:'33',leading:[{component:'switch'}],label:"List item 3"},
                            {id:'34',leading:[{component:'switch'}],label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list2"
                        selection
                        mode="single-select"
                        .items="${[
                            {id:'35',label:"List item 0",selected:true,trailing:[{component:'radio-button'}]},
                            {id:'36',label:"List item 1",trailing:[{component:'radio-button'}]},
                            {id:'37',label:"List item 2",trailing:[{component:'radio-button'}]},
                            {id:'38',label:"List item 3",trailing:[{component:'radio-button'}]},
                            {id:'39',label:"List item 4",trailing:[{component:'radio-button'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {id:'40',label:"List item 0",selected:true,trailing:[{component:'checkbox'}]},
                            {id:'41',label:"List item 1",selected:true,trailing:[{component:'checkbox'}]},
                            {id:'42',label:"List item 2",trailing:[{component:'checkbox'}]},
                            {id:'43',label:"List item 3",trailing:[{component:'checkbox'}]},
                            {id:'44',label:"List item 4",trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {id:'45',label:"List item 0",selected:true,trailing:[{component:'switch'}]},
                            {id:'46',label:"List item 1",selected:true,trailing:[{component:'switch'}]},
                            {id:'47',label:"List item 2",trailing:[{component:'switch'}]},
                            {id:'48',label:"List item 3",trailing:[{component:'switch'}]},
                            {id:'49',label:"List item 4",trailing:[{component:'switch'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-list-behavior", DemoListBehavior);

export default document.createElement("demo-list-behavior");
