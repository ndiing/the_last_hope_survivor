import { MDComponent } from "../component/component.js";

class MDScrim extends MDComponent{
    static properties={
        open:{type:Boolean},
    }

    connectedCallback(){
        super.connectedCallback()

        this.classList.add('md-scrim')
        this.addEventListener('click',this.handleClick)
    }

    disconnectedCallback(){
        super.disconnectedCallback()

        this.classList.remove('md-scrim')
        this.removeEventListener('click',this.handleClick)
    }

    updated(_changedProperties){
        if (_changedProperties.has("open")) {
            if (this.open) {
                this.emit('scrimShow')
                this.classList.add(`md-scrim--open`);
            } else {
                this.emit('scrimClose')
                this.classList.remove(`md-scrim--open`);
            }
        }
    }

    handleClick(event){
        this.toggle()
        this.emit('onScrimClick')
    }

    show(){
        this.open=true
    }
    close(){
        this.open=false
    }
    toggle(){
        this.open=!this.open
    }
}

customElements.define('md-scrim',MDScrim)

export {MDScrim}