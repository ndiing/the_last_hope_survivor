import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";

class MDImage extends MDComponent {
    static properties = {
        src: { type: String },
        alt: { type: String },
        loading: { type: String },
        aspectRatio: { type: String },
        shape: { type: String },
    };

    shapes = ["square", "round"];

    get _imageNativeStyle() {
        const style = {};

        if (this.aspectRatio) {
            style["aspect-ratio"] = this.aspectRatio;
        }

        if (this.shape === "round") {
            let borderRadius = "50%";

            if (this.aspectRatio) {
                const [width, height] = this.aspectRatio.split("/").map((string) => Number(string.trim()));
                borderRadius = `50% / ${(width / height) * 50}%`;
            }

            style["border-radius"] = borderRadius;
        }

        return style;
    }

    imageNative = createRef();

    constructor() {
        super();

        this.loading = "lazy";
        this.shape = "square";
    }

    _handleImageNativeLoad(event) {
        this.emit("imageNativeLoad", { event, component: this });
    }

    _handleImageNativeError(event) {
        this.imageNative.value.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        this.emit("imageNativeError", { event, component: this });
    }

    _updateShapeClass() {
        this.shapes.forEach((shape) => {
            if (shape === this.shape) {
                this.classList.add(`md-image--${shape}`);
            } else {
                this.classList.remove(`md-image--${shape}`);
            }
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            <img 
                src="${ifDefined(this.src)}" 
                alt="${ifDefined(this.alt)}" 
                loading="${ifDefined(this.loading)}" 
                class="md-image__native"
                style="${styleMap(this._imageNativeStyle)}"
                ${ref(this.imageNative)}
                @load="${this._handleImageNativeLoad}"
                @error="${this._handleImageNativeError}"
                >
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("shape")) {
            this._updateShapeClass();
        }
    }
}

customElements.define("md-image", MDImage);

export { MDImage };
