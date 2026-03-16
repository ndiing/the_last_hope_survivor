import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/breakpoint/breakpoint.js";

class TestAvatar extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-avatar src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Liam" size="extra-small"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Olivia" size="small"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Noah" size="medium"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Emma" size="large"></md-avatar>
                    <md-avatar src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Amelia" size="extra-large"></md-avatar>
                </md-layout-column-item>
            </md-layout-column>
        `
    }
}

customElements.define("test-avatar", TestAvatar);

export default document.createElement("test-avatar");
