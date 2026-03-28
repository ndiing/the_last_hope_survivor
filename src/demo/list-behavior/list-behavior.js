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
                            {label:"List item 0"},
                            {label:"List item 1"},
                            {label:"List item 2"},
                            {label:"List item 3"},
                            {label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list1"
                        .interactive="${false}"
                        .items="${[
                            {label:"List item 0"},
                            {label:"List item 1"},
                            {label:"List item 2"},
                            {label:"List item 3"},
                            {label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list2"
                        selection
                        mode="single-select"
                        .items="${[
                            {label:"List item 0"},
                            {label:"List item 1"},
                            {label:"List item 2"},
                            {label:"List item 3"},
                            {label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {label:"List item 0"},
                            {label:"List item 1"},
                            {label:"List item 2"},
                            {label:"List item 3"},
                            {label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list2"
                        selection
                        mode="single-select"
                        .items="${[
                            {leading:{component:'radio-button'},label:"List item 0",selected:true},
                            {leading:{component:'radio-button'},label:"List item 1"},
                            {leading:{component:'radio-button'},label:"List item 2"},
                            {leading:{component:'radio-button'},label:"List item 3"},
                            {leading:{component:'radio-button'},label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {leading:{component:'checkbox'},label:"List item 0",selected:true},
                            {leading:{component:'checkbox'},label:"List item 1",selected:true},
                            {leading:{component:'checkbox'},label:"List item 2"},
                            {leading:{component:'checkbox'},label:"List item 3"},
                            {leading:{component:'checkbox'},label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {leading:{component:'switch'},label:"List item 0",selected:true},
                            {leading:{component:'switch'},label:"List item 1",selected:true},
                            {leading:{component:'switch'},label:"List item 2"},
                            {leading:{component:'switch'},label:"List item 3"},
                            {leading:{component:'switch'},label:"List item 4"},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list2"
                        selection
                        mode="single-select"
                        .items="${[
                            {label:"List item 0",selected:true,trailing:[{component:'radio-button'}]},
                            {label:"List item 1",trailing:[{component:'radio-button'}]},
                            {label:"List item 2",trailing:[{component:'radio-button'}]},
                            {label:"List item 3",trailing:[{component:'radio-button'}]},
                            {label:"List item 4",trailing:[{component:'radio-button'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {label:"List item 0",selected:true,trailing:[{component:'checkbox'}]},
                            {label:"List item 1",selected:true,trailing:[{component:'checkbox'}]},
                            {label:"List item 2",trailing:[{component:'checkbox'}]},
                            {label:"List item 3",trailing:[{component:'checkbox'}]},
                            {label:"List item 4",trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        id="list3"
                        selection
                        mode="multi-select"
                        .items="${[
                            {label:"List item 0",selected:true,trailing:[{component:'switch'}]},
                            {label:"List item 1",selected:true,trailing:[{component:'switch'}]},
                            {label:"List item 2",trailing:[{component:'switch'}]},
                            {label:"List item 3",trailing:[{component:'switch'}]},
                            {label:"List item 4",trailing:[{component:'switch'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                
            </md-layout-column>
        `
    }
}

customElements.define("demo-list-behavior", DemoListBehavior);

export default document.createElement("demo-list-behavior");
