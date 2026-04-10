import { MDComponent } from "../component/component.js";

class MDLayout extends MDComponent {

    get layoutBody() { return this.querySelector('.md-layout__body')}
    get layoutHeader() { return this.querySelector('.md-layout__header')}
    get layoutFooter() { return this.querySelector('.md-layout__footer')}

    _handleLayoutScrollChange(event){
        this._lastScrollTop=this._lastScrollTop??0
        this._scrollUp=this._scrollUp??0
        this._scrollDown=this._scrollDown??0

        this._valueUp = this._valueUp??0
        this._valueDown = this._valueDown??0

        if(this._lastScrollTop>this.scrollTop){
            this._valueUp=0
            this._scrollUp=this.scrollTop
            this._valueDown=(Math.max(this.scrollTop-this._scrollDown,-this.layoutHeader.clientHeight))
        }else{
            this._valueDown=0
            this._scrollDown=this.scrollTop
            this._valueUp=(Math.max(this._scrollUp-this.scrollTop,-this.layoutHeader.clientHeight))
        }

        // this.layoutHeader.style.top=this._valueUp+'px'
        // this.layoutFooter.style.bottom=this._valueUp+'px'

        this._lastScrollTop=this.scrollTop
    }

    _handleLayoutScroll(event){
        window.requestAnimationFrame(() => this._handleLayoutScrollChange(event))
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-layout");

        await this.updateComplete

        this._handleLayoutScroll=this._handleLayoutScroll.bind(this)
        this.addEventListener('scroll',this._handleLayoutScroll)
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-layout");

        await this.updateComplete

        this.removeEventListener('scroll',this._handleLayoutScroll)
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-layout", MDLayout);

export { MDLayout };
