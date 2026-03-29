import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoToolGroup extends MDComponent {
    constructor() {
        super();
        this.tools = [
            //
            { component: "avatar", src: "https://api.dicebear.com/9.x/icons/svg?seed=0&scale=50" },
            { component: "image", src: "https://api.dicebear.com/9.x/icons/svg?seed=1&scale=50" },
            { component: "video", src: "https://api.dicebear.com/9.x/icons/svg?seed=2&scale=50" },
            { component: "icon", icon: "image" },
            { component: "checkbox" },
            { component: "radio-button" },
            { component: "switch" },
            { component: "text", text: "⌘+C" },
            { component: "badge", label:0 },
            { component: "badge", label:3 },
            { component: "badge", label:1000 },
        ];
    }
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-tool-group
                        .tools="${this.tools}"
                    ></md-tool-group>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("demo-tool-group", DemoToolGroup);

export default document.createElement("demo-tool-group");
