import { html } from "lit";
import { MDComponent } from "../component/component.js";

class MDPane extends MDComponent {
    static properties = {
        fit: { type: Boolean },
        sticky: { type: Boolean },
        headerHideOnScroll: { type: String }, // down/up
        footerHideOnScroll: { type: String }, // down/up
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
            <!-- <div class="md-pane__header">
                <div class="md-pane__tool-group">
                    <md-icon class="md-pane__tool">image</md-icon>
                </div>
                <div class="md-pane__content">
                    <div class="md-pane__headline">headline</div>
                    <div class="md-pane__subtitle">subtitle</div>
                </div>
                <div class="md-pane__tool-group">
                    <md-icon class="md-pane__tool">image</md-icon>
                    <md-icon class="md-pane__tool">image</md-icon>
                    <md-icon class="md-pane__tool">image</md-icon>
                </div>
            </div>
            <div class="md-pane__body">
                <div class="md-pane__main">
                </div>
                <div class="md-pane__footer">
                    <md-button class="md-pane__button" label="button"></md-button>
                    <md-button class="md-pane__button" label="button"></md-button>
                </div>
            </div> -->
            ${this._header}
            <div class="md-pane__body">
                ${this._body}
                ${this._footer}
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
            this._body = this._childNodes.find((child) => child.classList?.contains("md-pane__body"));
            this._footer = this._childNodes.find((child) => child.classList?.contains("md-pane__footer"));
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
