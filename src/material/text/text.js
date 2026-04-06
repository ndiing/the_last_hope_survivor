import { MDComponent } from "../component/component.js";

class MDText extends MDComponent {
    static properties = {
        scale: { type: String },
    };

    scales = ["display-large", "display-medium", "display-small", "headline-large", "headline-medium", "headline-small", "title-large", "title-medium", "title-small", "body-large", "body-medium", "body-small", "label-large", "label-medium", "label-small"];

    constructor() {
        super();
        this.scale = "body-large";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("scale")) {
            this.scales.forEach((scale) => {
                if (scale === this.scale) {
                    this.classList.add(`md-text--${scale}`);
                } else {
                    this.classList.remove(`md-text--${scale}`);
                }
            });
        }
    }
}

customElements.define("md-text", MDText);

export { MDText };
