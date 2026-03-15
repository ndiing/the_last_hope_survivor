import { LitElement } from "lit";

class MDComponent extends LitElement {
    createRenderRoot() {
        return this;
    }

    on(type, listener) {
        this.addEventListener(type, listener);
    }

    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    emit(type, detail, target = this) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            // composed:true,
            detail,
        });

        target.dispatchEvent(event);
    }
}

export { MDComponent };
