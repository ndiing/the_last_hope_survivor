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
                            {leading:{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {leading:{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text'},
                            {leading:{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {leading:{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {leading:{component:'avatar',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {leading:{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text'},
                            {leading:{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {leading:{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {leading:{component:'image',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {leading:{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text'},
                            {leading:{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {leading:{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {leading:{component:'video',src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'},label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'icon',icon:'image'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {leading:{component:'icon',icon:'image'},label:'Label text',supportingText:'Supporting text'},
                            {leading:{component:'icon',icon:'image'},label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'icon',icon:'image'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'checkbox'}]},
                            {leading:{component:'icon',icon:'image'},label:'Label text',supportingText:'Supporting text',trailing:[{component:'checkbox'}]},
                            {leading:{component:'icon',icon:'image'},label:'Label text',trailing:[{component:'checkbox'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {label:'Label text',supportingText:'Supporting text'},
                            {label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'text',text:'100+'}]},
                            {label:'Label text',supportingText:'Supporting text',trailing:[{component:'text',text:'100+'}]},
                            {label:'Label text',trailing:[{component:'text',text:'100+'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'checkbox'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {leading:{component:'checkbox'},label:'Label text',supportingText:'Supporting text'},
                            {leading:{component:'checkbox'},label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'checkbox'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'text',text:'100+'}]},
                            {leading:{component:'checkbox'},label:'Label text',supportingText:'Supporting text',trailing:[{component:'text',text:'100+'}]},
                            {leading:{component:'checkbox'},label:'Label text',trailing:[{component:'text',text:'100+'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'radio-button'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines'},
                            {leading:{component:'radio-button'},label:'Label text',supportingText:'Supporting text'},
                            {leading:{component:'radio-button'},label:'Label text'},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'radio-button'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'text',text:'100+'}]},
                            {leading:{component:'radio-button'},label:'Label text',supportingText:'Supporting text',trailing:[{component:'text',text:'100+'}]},
                            {leading:{component:'radio-button'},label:'Label text',trailing:[{component:'text',text:'100+'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'switch'}]},
                            {label:'Label text',supportingText:'Supporting text',trailing:[{component:'switch'}]},
                            {label:'Label text',trailing:[{component:'switch'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>
                <md-layout-column-item expanded="6" medium="4" compact="4">
                    <md-list
                        .items="${[
                            {leading:{component:'icon',icon:'image'},label:'Label text',supportingText:'Supporting text that is long enough to fill up multiple lines',trailing:[{component:'switch'}]},
                            {leading:{component:'icon',icon:'image'},label:'Label text',supportingText:'Supporting text',trailing:[{component:'switch'}]},
                            {leading:{component:'icon',icon:'image'},label:'Label text',trailing:[{component:'switch'}]},
                        ]}"
                    ></md-list>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-list", DemoList);

export default document.createElement("demo-list");
