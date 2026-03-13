import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestImage extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <!-- <div class="md-layout"> -->
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12">
                        <md-image style="width:64px;" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12">
                        <md-image style="width:64px;" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12">
                        <md-image style="height:64px;" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12">
                        <md-image style="width:64px;" shape="round" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" shape="round" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" shape="round" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" shape="round" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" shape="round" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="width:64px;" shape="round" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12">
                        <md-image style="height:64px;" shape="round" ratio="16/9" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" shape="round" ratio="3/2" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" shape="round" ratio="4/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" shape="round" ratio="1/1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" shape="round" ratio="3/4" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                        <md-image style="height:64px;" shape="round" ratio="2/3" src="https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Leo"></md-image>
                    </div>
                </div>

            <!-- </div> -->
        `
    }
}

customElements.define("test-image", TestImage);

export default document.createElement("test-image");
