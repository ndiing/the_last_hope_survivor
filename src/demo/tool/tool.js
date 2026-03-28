import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { renderTool } from "../../material/tool/tool.js";

class DemoTool extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('avatar',{
                        src:'https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50'
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('image',{
                        src:'https://api.dicebear.com/9.x/icons/svg?seed=11&scale=50',
                    })}
                </md-layout-column-item>
                
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('video',{
                        src:'https://api.dicebear.com/9.x/icons/svg?seed=12&scale=50',
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('icon',{
                        icon:'image'
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('checkbox',{
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('radio-button',{
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('switch',{
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${renderTool('text',{
                        text: '⌘+C'
                    })}
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-tool", DemoTool);

export default document.createElement("demo-tool");
