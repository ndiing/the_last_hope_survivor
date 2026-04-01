import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { tool } from "../../material/tool/tool.js";

class DemoTool extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('avatar',{
                        src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50'
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('image',{
                        src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50',
                    })}
                </md-layout-column-item>
                
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('video',{
                        src:'https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50',
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('icon',{
                        icon:'image'
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('checkbox',{
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('radio-button',{
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('switch',{
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('text',{
                        text: '⌘+C'
                    })}
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('badge',{
                        label: 0
                    })}
                </md-layout-column-item>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('badge',{
                        label: 3
                    })}
                </md-layout-column-item>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('badge',{
                        label: 1000
                    })}
                </md-layout-column-item>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    ${tool('icon-button',{
                        icon: 'menu'
                    })}
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-tool", DemoTool);

export default document.createElement("demo-tool");
