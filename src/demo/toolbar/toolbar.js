import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoToolbar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-toolbar .items="${[
                        {component:'icon-button',icon:'archive',color:'standard'},
                        {component:'icon-button',icon:'delete',color:'standard'},
                        {component:'icon-button',icon:'mark_email_unread',color:'standard'},
                        {component:'icon-button',icon:'snooze',color:'standard'},
                        {component:'icon-button',icon:'star',color:'standard'},
                    ]}" variant="docked"></md-toolbar>
                </md-column-item>
                
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-toolbar .items="${[
                        {component:'icon-button', icon:'format_bold',color:'standard'},
                        {component:'icon-button', icon:'format_italic',color:'standard'},
                        {component:'icon-button', icon:'format_underlined',color:'standard'},
                        {component:'icon-button', icon:'format_color_text',color:'standard'},
                        {component:'icon-button', icon:'format_color_fill',color:'standard'},
                        {component:'icon-button', icon:'more_vert',color:'standard'},
                    ]}" variant="floating"></md-toolbar>
                </md-column-item>
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-toolbar .items="${[
                        { component: "avatar", src: "https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" },
                        { component: "image", src: "https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" },
                        { component: "video", src: "https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" },
                        { component: "checkbox" },
                        { component: "radio-button" },
                        { component: "switch" },
                        { component: "text", text: "⌘+C" },
                        { component: "badge", label: 0 },
                        { component: "badge", label: 3 },
                        { component: "badge", label: 1000 },
                        {component:'icon', icon:'more_vert',color:'standard'},
                        {component:'icon-button', icon:'more_vert',color:'standard'},
                    ]}" variant="docked"></md-toolbar>
                </md-column-item>
                
                
                
            </md-column>
        `
    }
}

customElements.define("demo-toolbar", DemoToolbar);

export default document.createElement("demo-toolbar");
