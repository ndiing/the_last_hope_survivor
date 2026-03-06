import { LitElement } from "lit";

class MDComponent extends LitElement{
    createRenderRoot(){
        return this
    }

    on(type,listener){
        this.addEventListener(type,listener)
    }

    off(type,listener){
        this.removeEventListener(type,listener)
    }

    emit(type,detail){
        const event = new CustomEvent(type,{
            bubbles:true,
            composed:true,
            cancelable:true,
            detail
        })
        this.dispatchEvent(event)
    }
}

export {MDComponent}