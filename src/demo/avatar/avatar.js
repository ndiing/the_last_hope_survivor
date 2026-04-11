import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoAvatar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="extra-small"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="small"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="medium"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="large"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="extra-large"></md-avatar>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="extra-small" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="small" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="medium" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="large" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" size="extra-large" shape="square"></md-avatar>
                </md-column-item>

            </md-column>
        `
    }
}

customElements.define("demo-avatar", DemoAvatar);

export default document.createElement("demo-avatar");
