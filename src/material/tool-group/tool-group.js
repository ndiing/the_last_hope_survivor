import { MDComponent } from "../component/component.js";
import { tool } from "../tool/tool.js";

class MDToolGroup extends MDComponent {
    static properties = {
        tools: { type: Array },
    };

    constructor() {
        super();
        this.tools = [];
    }

    render() {
        return this.tools.map(({ component, ...properties }) => tool(component, properties));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tool-group");
    }
}

customElements.define("md-tool-group", MDToolGroup);

export { MDToolGroup };
