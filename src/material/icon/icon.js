import { MDComponent } from "../component/component.js";

class MDIcon extends MDComponent{
    connectedCallback(){
        super.connectedCallback()

        this.classList.add('md-icon')
    }
}

customElements.define('md-icon',MDIcon)

export {MDIcon}