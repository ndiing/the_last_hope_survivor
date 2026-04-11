import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoToolGroup extends MDComponent {
    constructor() {
        super();
        this.tools = [
            //
            { component: "avatar", src: "https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" },
            { component: "image", src: "https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" },
            { component: "video", src: "https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" },
            { component: "icon", icon: "image" },
            { component: "checkbox" },
            { component: "radio-button" },
            { component: "switch" },
            { component: "text", text: "⌘+C" },
            { component: "badge", label: 0 },
            { component: "badge", label: 3 },
            { component: "badge", label: 1000 },
            { component: "icon-button", icon: "menu" },
        ];
    }
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-tool-group
                        .tools="${this.tools}"
                    ></md-tool-group>
                </md-column-item>
            </md-column>
        `
    }
}

customElements.define("demo-tool-group", DemoToolGroup);

export default document.createElement("demo-tool-group");
