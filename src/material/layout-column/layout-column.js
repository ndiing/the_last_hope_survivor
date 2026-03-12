import { MDComponent } from "../component/component.js";

class MDLayoutColumn extends MDComponent{
    connectedCallback(){
        super.connectedCallback()

        this.classList.add('md-layout-column')
    }
}

customElements.define('md-layout-column',MDLayoutColumn)

export {MDLayoutColumn}