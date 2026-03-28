import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDAvatar extends MDComponent {
    static properties = {
        src: { type: String },
        size: { type: String },
        shape: { type: String },
    };

    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    shapes = ["round", "square"];

    constructor() {
        super();

        this.size = "small";
        this.shape = "round";
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-image 
                class="md-avatar__native"
                src="${ifDefined(this.src)}"
                shape="${ifDefined(this.shape)}"
            ></md-image>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-avatar");
    }

    _applySizeClass() {
        this.sizes.forEach((size) => {
            if (size === this.size) {
                this.classList.add(`md-avatar--${size}`);
            } else {
                this.classList.remove(`md-avatar--${size}`);
            }
        });
    }

    _applyShapeClass() {
        this.shapes.forEach((shape) => {
            if (shape === this.shape) {
                this.classList.add(`md-avatar--${shape}`);
            } else {
                this.classList.remove(`md-avatar--${shape}`);
            }
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("size")) {
            this._applySizeClass();
        }

        if (_changedProperties.has("shape")) {
            this._applyShapeClass();
        }
    }
}

customElements.define("md-avatar", MDAvatar);

export { MDAvatar };
