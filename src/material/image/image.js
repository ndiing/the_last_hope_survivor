import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MDImage extends MDComponent {
    static properties = {
        src: { type: String },
        alt: { type: String },
        ratio: { type: String },
        shape: { type: String },
    };

    shapes = ["round", "square"];

    get _imageNativeStyle() {
        const style = {};
        if (this.ratio) {
            style["aspect-ratio"] = this.ratio;
        }
        if (this.shape === "round") {
            if (this.ratio) {
                const [x, y] = this.ratio.split("/");

                const xNumber = Number(x.trim());
                const yNumber = Number(y.trim());

                const verticalRadius = (xNumber / yNumber) * 50;

                style["border-radius"] = `50% / ${verticalRadius}%`;
            } else {
                style["border-radius"] = "50%";
            }
        }
        return style;
    }

    render() {
        /* prettier-ignore */
        return html`
            <img 
                class="md-image__native" 
                style="${styleMap(this._imageNativeStyle)}" 
                .src="${ifDefined(this.src)}" 
                .alt="${ifDefined(this.alt)}">
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }
}

customElements.define("md-image", MDImage);

export { MDImage };
