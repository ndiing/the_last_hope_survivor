import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { Ripple } from "../../material/ripple/ripple.js";

class DemoRipple extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{}}" class="demo-ripple__item"></div>
                </md-layout-column-item>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{unbounded:true}}" class="demo-ripple__item"></div>
                </md-layout-column-item>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{radius:128}}" class="demo-ripple__item"></div>
                </md-layout-column-item>
                
                
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{centered:true,}}" class="demo-ripple__item"></div>
                </md-layout-column-item>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{centered:true,unbounded:true}}" class="demo-ripple__item"></div>
                </md-layout-column-item>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{centered:true,radius:128}}" class="demo-ripple__item"></div>
                </md-layout-column-item>
                
                
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{trigger:'.demo-ripple__trigger',centered:true,}}" class="demo-ripple__item">
                        <div class="demo-ripple__trigger"></div>
                    </div>
                </md-layout-column-item>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{trigger:'.demo-ripple__trigger',centered:true,unbounded:true}}" class="demo-ripple__item">
                        <div class="demo-ripple__trigger"></div>
                    </div>
                </md-layout-column-item>
                <md-layout-column-item expanded="4" medium="4" compact="4">
                    <div .ripple="${{trigger:'.demo-ripple__trigger',centered:true,radius:128}}" class="demo-ripple__item">
                        <div class="demo-ripple__trigger"></div>
                    </div>
                </md-layout-column-item>
                

            </md-layout-column>
        `
    }


    async connectedCallback(){
        super.connectedCallback()

        await this.updateComplete

        this._ripples=[]

        this.querySelectorAll('.demo-ripple__item').forEach(element=>{
            const _ripple=new Ripple(element,element.ripple)
            _ripple.init()
            this._ripples.push(_ripple)
        })
    }


    async disconnectedCallback(){
        super.disconnectedCallback()

        await this.updateComplete

        this._ripples.forEach(_ripple=>{
            _ripple.destroy()
        })
    }
}

customElements.define("demo-ripple", DemoRipple);

export default document.createElement("demo-ripple");
