import { MDComponent } from "../component/component.js";

class MDLayoutBorderItem extends MDComponent {
    static properties = {
        region: { type: String },
        split: { type: Boolean },
        modal: { type: Boolean },
        open: { type: Boolean },
    };

    regions = ["north", "west", "center", "east", "south"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout-border__item");

        this.scrimElement = document.createElement('md-scrim')
        document.body.append(this.scrimElement)
        this.handleScrimClose=
        this.handleScrimClose.bind(this)
        this.scrimElement.on('scrimClose',this.handleScrimClose)
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout-border__item");

        this.scrimElement.off('scrimClose',this.handleScrimClose)
        this.scrimElement.remove()
    }

    updated(_changedProperties) {
        if (_changedProperties.has("region")) {
            this.regions.forEach((region) => {
                if (this.region === region) {
                    this.classList.add(`md-layout-border__item--${region}`);
                } else {
                    this.classList.remove(`md-layout-border__item--${region}`);
                }
            });
        }
        if (_changedProperties.has("split")) {
            if (this.split) {
                this.classList.add(`md-layout-border__item--split`);
            } else {
                this.classList.remove(`md-layout-border__item--split`);
            }
        }
        if (_changedProperties.has("modal")) {
            if (this.modal) {
                this.classList.add(`md-layout-border__item--modal`);
            } else {
                this.classList.remove(`md-layout-border__item--modal`);
            }
        }
        if (_changedProperties.has("open")) {
            if (this.open) {
                if(this.modal){
                    this.scrimElement.show()
                }
                this.emit('layoutBorderItemShow')
                this.classList.add(`md-layout-border__item--open`);
            } else {
                this.scrimElement.close()
                this.emit('layoutBorderItemClose')
                this.classList.remove(`md-layout-border__item--open`);
            }
        }
        
        
    }

    handleScrimClose(){
        this.close()
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

customElements.define("md-layout-border-item", MDLayoutBorderItem);

export { MDLayoutBorderItem };
