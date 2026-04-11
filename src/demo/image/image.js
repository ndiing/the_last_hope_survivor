import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoImage extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-image 
                        style="width:128px;" 
                        src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"
                        @imageNativeLoad="${console.log}"
                        @imageNativeError="${console.log}"
                    ></md-image>
                    <md-image 
                        style="height:128px;" 
                        src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50"
                        @imageNativeLoad="${console.log}"
                        @imageNativeError="${console.log}"
                    ></md-image>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="16/9"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/2"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="4/3"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="1/1"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/4"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="2/3"></md-image>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="16/9"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/2"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="4/3"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="1/1"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/4"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="2/3"></md-image>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="16/9" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/2" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="4/3" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="1/1" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/4" shape="round"></md-image>
                    <md-image style="width:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="2/3" shape="round"></md-image>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="16/9" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/2" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="4/3" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="1/1" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="3/4" shape="round"></md-image>
                    <md-image style="height:128px;" src="https://api.dicebear.com/9.x/icons/svg?seed=321654987&scale=50" aspectRatio="2/3" shape="round"></md-image>
                </md-column-item>

            </md-column>
        `
    }
}

customElements.define("demo-image", DemoImage);

export default document.createElement("demo-image");
