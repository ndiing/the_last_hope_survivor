import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTest extends MDComponent {
    static properties={
        url:{type:String,state:true}
    }
    constructor(){
        super()
        this.url='http://localhost:8080/#/breakpoint'
    }
    _handleUrlChange(event){
        const url=event.currentTarget
        this.url=url.value
    }
    render() {
        /* prettier-ignore */
        return html`
            <input type="url" value="http://localhost:8080/#/breakpoint" @change="${this._handleUrlChange}" style="margin:24px;width:50%;">
            <div></div>
            <iframe src="${this.url}" width="360" height="800"></iframe>
            <iframe src="${this.url}" width="834" height="1112"></iframe>
            <iframe src="${this.url}" width="1920" height="1080"></iframe>
        `
    }
}

customElements.define("demo-test", DemoTest);

export default document.createElement("demo-test");
