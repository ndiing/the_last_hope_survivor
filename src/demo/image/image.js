import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoImage extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-image 
                        style="width:128px;" 
                        src="https://api.dicebear.com/9.x/icons/svg?seed=0&scale=50"
                        @imageNativeLoad="${console.log}"
                        @imageNativeError="${console.log}"
                    ></md-image>
                    <md-image 
                        style="height:128px;" 
                        src="https://api.dicebear.com/9.x/icons/svg?seed=1&scale=50"
                        @imageNativeLoad="${console.log}"
                        @imageNativeError="${console.log}"
                    ></md-image>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=2&scale=50" aspectRatio="16/9"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=3&scale=50" aspectRatio="3/2"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=4&scale=50" aspectRatio="4/3"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=5&scale=50" aspectRatio="1/1"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=6&scale=50" aspectRatio="3/4"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=7&scale=50" aspectRatio="2/3"></md-image>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=8&scale=50" aspectRatio="16/9"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=9&scale=50" aspectRatio="3/2"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=10&scale=50" aspectRatio="4/3"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=11&scale=50" aspectRatio="1/1"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=12&scale=50" aspectRatio="3/4"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=13&scale=50" aspectRatio="2/3"></md-image>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=14&scale=50" aspectRatio="16/9" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=15&scale=50" aspectRatio="3/2" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=16&scale=50" aspectRatio="4/3" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=17&scale=50" aspectRatio="1/1" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=18&scale=50" aspectRatio="3/4" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=19&scale=50" aspectRatio="2/3" shape="round"></md-image>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=20&scale=50" aspectRatio="16/9" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=21&scale=50" aspectRatio="3/2" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=22&scale=50" aspectRatio="4/3" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=23&scale=50" aspectRatio="1/1" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=24&scale=50" aspectRatio="3/4" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=25&scale=50" aspectRatio="2/3" shape="round"></md-image>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-image", DemoImage);

export default document.createElement("demo-image");
