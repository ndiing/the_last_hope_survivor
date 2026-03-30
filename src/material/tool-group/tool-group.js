import { MDComponent } from "../component/component.js";
import { renderTool } from "../tool/tool.js";

class MDToolGroup extends MDComponent {
    static properties = {
        tools: { type: Array },
    };

    constructor() {
        super();
        this.tools = [];
    }

    render() {
        return this.tools.map(({ component, ...properties }) => renderTool(component, properties));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tool-group");
    }
}

customElements.define("md-tool-group", MDToolGroup);

export { MDToolGroup };
