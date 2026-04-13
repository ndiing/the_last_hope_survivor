import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";

class MDPane extends MDComponent {
    static properties = {
        fit: { type: Boolean },
        sticky: { type: Boolean },
        headerHideOnScroll: { type: String }, // down/up
        footerHideOnScroll: { type: String }, // down/up
        leading: { type: Array },
        headline: { type: String },
        subtitle: { type: String },
        trailing: { type: Array },
        buttons: { type: Array },
    };

    constructor() {
        super();
        this.fit = false;
        this.sticky = false;

        // this.headerHideOnScroll = "down";
        // this.footerHideOnScroll = "down";
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.leading?.length||this.trailing?.length||this.headline||this.subtitle?html`
                <div class="md-pane__header">
                    ${this.leading?.length?html`<md-toolbar class="md-pane__toolbar" .items="${this.leading}"></md-toolbar>`:nothing}
                    ${this.headline||this.subtitle?html`
                        <div class="md-pane__content">
                            ${this.headline?html`<div class="md-pane__headline">${this.headline}</div>`:nothing}
                            ${this.subtitle?html`<div class="md-pane__subtitle">${this.subtitle}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailing?.length?html`<md-toolbar class="md-pane__toolbar" .items="${this.trailing}"></md-toolbar>`:nothing}
                </div>
            `:this._header?this._header:nothing}
            <div class="md-pane__main">
                ${this._body?this._body:html`<div class="md-pane__body"></div>`}
                ${this.buttons?.length?html`
                    <div class="md-pane__footer">
                        ${this.buttons.map(button=>html`
                            <md-button 
                                class="md-pane__button" 
                                .label="${button.label}"
                            ></md-button>
                        `)}
                    </div>
                `:this._footer?this._footer:nothing}
            </div>
        `;
    }

    _handlePaneScrollChange(event) {
        if (!(this._header || this._footer || this.headerHideOnScroll || this.footerHideOnScroll)) return;

        this.lastScrollTop = this.lastScrollTop ?? 0;

        this.lastScrollDown = this.lastScrollDown ?? 0;
        this.lastScrollUp = this.lastScrollUp ?? 0;

        this._headerUp = this._headerUp ?? 0;
        this._footerUp = this._footerUp ?? 0;
        this._headerDown = this._headerDown ?? 0;
        this._footerDown = this._footerDown ?? 0;

        if (this.lastScrollTop > this.scrollTop) {
            this._headerDown = 0;
            this._footerDown = 0;
            this.lastScrollUp = this.scrollTop;

            if (this._header && this.headerHideOnScroll) this._headerUp = Math.max(this.scrollTop - this.lastScrollDown, -this._header.clientHeight);
            if (this._footer && this.footerHideOnScroll) this._footerUp = Math.max(this.scrollTop - this.lastScrollDown, -this._footer.clientHeight);
        } else {
            this._headerUp = 0;
            this._footerUp = 0;
            this.lastScrollDown = this.scrollTop;

            if (this._header && this.headerHideOnScroll) this._headerDown = Math.max(this.lastScrollUp - this.scrollTop, -this._header.clientHeight);
            if (this._footer && this.footerHideOnScroll) this._footerDown = Math.max(this.lastScrollUp - this.scrollTop, -this._footer.clientHeight);
        }

        if (this._header && this.headerHideOnScroll) this._header.style.top = (this.headerHideOnScroll === "down" ? this._headerDown : this._headerUp) + "px";
        if (this._footer && this.footerHideOnScroll) this._footer.style.bottom = (this.footerHideOnScroll === "down" ? this._footerDown : this._footerUp) + "px";

        this.lastScrollTop = this.scrollTop;
    }

    _handlePaneScroll(event) {
        window.requestAnimationFrame(() => this._handlePaneScrollChange(event));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");

        if (!this._childNodes) {
            this._childNodes = Array.from(this.childNodes);
            this.replaceChildren();
            this._header = this._childNodes.find((child) => child.classList?.contains("md-pane__header"));
            this._footer = this._childNodes.find((child) => child.classList?.contains("md-pane__footer"));
            this._body = this._childNodes.filter((child) => child!==this._header||child!==this._footer);
        }

        this._handlePaneScroll = this._handlePaneScroll.bind(this);
        this._handlePaneScrollChange = this._handlePaneScrollChange.bind(this);
        this.addEventListener("scroll", this._handlePaneScroll);
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("fit")) {
            if (this.fit) {
                this.classList.add(`md-pane--fit`);
            } else {
                this.classList.remove(`md-pane--fit`);
            }
        }
        if (_changedProperties.has("sticky")) {
            if (this.sticky) {
                this.classList.add(`md-pane--sticky`);
            } else {
                this.classList.remove(`md-pane--sticky`);
            }
        }
    }
}

customElements.define("md-pane", MDPane);

export { MDPane };
