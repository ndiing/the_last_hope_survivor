import { html } from "lit";
import { MDComponent } from "../component/component.js";

class MDTest extends MDComponent{
    constructor(){
        super()

        this.onTestButtonClick = event=>{
            console.log(event)
            this.off('testButtonClick',this.onTestButtonClick)
        }
        this.on('testButtonClick',this.onTestButtonClick)
        
    }

    render(){
        return html`
            <button @click="${this.handleButtonClick}">button</button>
        `
    }

    handleButtonClick(event){
        this.emit('testButtonClick',event)
    }
}

customElements.define('md-test',MDTest)

