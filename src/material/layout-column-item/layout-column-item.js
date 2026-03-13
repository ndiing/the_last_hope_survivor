import { MDComponent } from "../component/component.js";

class MDLayoutColumnItem extends MDComponent {
    static properties = {
        expanded: { type: Number },
        medium: { type: Number },
        compact: { type: Number },
    };

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout-column__item");
    }

    updated(_changedProperties) {
        if (_changedProperties.has("expanded")) {
            this._applySizeClass(12, "expanded");
        }

        if (_changedProperties.has("medium")) {
            this._applySizeClass(8, "medium");
        }

        if (_changedProperties.has("compact")) {
            this._applySizeClass(4, "compact");
        }
    }

    _applySizeClass(columns, size) {
        for (let i = 1; i <= columns; i++) {
            if (this[size] === i) {
                this.classList.add(`md-layout-column__item--${size}${i}`);
            } else {
                this.classList.remove(`md-layout-column__item--${size}${i}`);
            }
        }
    }
}

customElements.define("md-layout-column-item", MDLayoutColumnItem);

export { MDLayoutColumnItem };
