import { html } from "lit";
import { MDComponent } from "../component/component.js";

class MDAvatar extends MDComponent {
    static properties = {
        src: { type: String },
        size: { type: String },
    };

    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    constructor() {
        super();

        this.size = "small";
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-image 
                class="md-avatar__native"
                .src="${this.src}"
                shape="round"
            ></md-image>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-avatar");
    }

    _applySizeClass() {
        this.sizes.forEach((size) => {
            if (this.size === size) {
                this.classList.add(`md-avatar--${size}`);
            } else {
                this.classList.remove(`md-avatar--${size}`);
            }
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("size")) {
            this._applySizeClass();
        }
    }
}

customElements.define("md-avatar", MDAvatar);

export { MDAvatar };
