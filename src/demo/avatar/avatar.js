import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoAvatar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=0&scale=50" size="extra-small"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=1&scale=50" size="small"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=2&scale=50" size="medium"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=3&scale=50" size="large"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=4&scale=50" size="extra-large"></md-avatar>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=5&scale=50" size="extra-small" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=6&scale=50" size="small" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=7&scale=50" size="medium" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=8&scale=50" size="large" shape="square"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/icons/svg?seed=9&scale=50" size="extra-large" shape="square"></md-avatar>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-avatar", DemoAvatar);

export default document.createElement("demo-avatar");
