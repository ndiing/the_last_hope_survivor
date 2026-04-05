import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

class MDComponent extends LitElement {
    constructor() {
        super();

        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }

    on(type, listener) {
        this.addEventListener(type, listener);
    }

    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        this.dispatchEvent(event);
    }
}

class MDElement extends HTMLElement {
    static observedAttributes = [];

    constructor() {
        super();
    }

    connectedCallback() {}

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {}

    on(type, listener) {
        this.addEventListener(type, listener);
    }

    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        this.dispatchEvent(event);
    }
}

export { MDComponent, MDElement };
