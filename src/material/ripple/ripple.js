class RippleController {
    constructor(host, options = {}) {
        (this.host = host).addController(this);
        this.options = {
            centered: false,
            radius: undefined,
            unbounded: false,
            trigger: undefined,
            container: undefined,
            ...options,
        };
    }

    _handlePointerenter(event) {
        this.container.classList.add("md-ripple--hover");
    }

    _handlePointerleave(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    _handlePointerdown(event) {
        window.addEventListener("pointerup", this._handlePointerup, { passive: true });
        window.addEventListener("touchend", this._handlePointerup, { passive: true });

        this.container.classList.add("md-ripple--press");

        const rect = this.container.getBoundingClientRect();

        if (!this.options.centered) {
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / this.radius);
            const y = (0.5 - top) * ((100 / this.radius) * (rect.height / rect.width));

            this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%");
            this.container.style.setProperty("--md-comp-ripple-left", left * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-top", top * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-x", x * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-y", y * 100 + "%");
        }
    }

    _handlePointerup(event) {
        this.container.classList.remove("md-ripple--press");

        window.removeEventListener("pointerup", this._handlePointerup);
        window.removeEventListener("touchend", this._handlePointerup);
    }

    _handleFocus(event) {
        this.container.classList.add("md-ripple--focus");
    }

    _handleBlur(event) {
        this.container.classList.remove("md-ripple--focus");
    }

    async hostConnected() {
        await this.host.updateComplete;

        this.container = this.options.container ? this.host.querySelector(this.options.container) : this.host;
        this.container.classList.add("md-ripple");
        if (!this.options.unbounded) {
            this.container.classList.add("md-ripple--bounded");
        }
        this.container.setAttribute("tabIndex", 0);

        this.radius = 141.4213562373095;
        if (this.options.radius) {
            this.radius = (this.options.radius / this.container.clientWidth) * 100;
        }
        this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%");

        this.trigger = this.options.trigger ? this.host.querySelector(this.options.trigger) : this.host;
        this.trigger.classList.add("md-ripple--trigger");

        this._handlePointerenter = this._handlePointerenter.bind(this);
        this._handlePointerleave = this._handlePointerleave.bind(this);
        this._handlePointerdown = this._handlePointerdown.bind(this);
        this._handlePointerup = this._handlePointerup.bind(this);
        this._handleFocus = this._handleFocus.bind(this);
        this._handleBlur = this._handleBlur.bind(this);

        this.trigger.addEventListener("pointerenter", this._handlePointerenter);
        this.trigger.addEventListener("pointerleave", this._handlePointerleave);
        this.trigger.addEventListener("pointerdown", this._handlePointerdown);
        this.trigger.addEventListener("focus", this._handleFocus);
        this.trigger.addEventListener("blur", this._handleBlur);
    }

    async hostDisconnected() {
        await this.host.updateComplete;

        this.container.classList.remove("md-ripple");
        this.container.classList.remove("md-ripple--bounded");
        this.container.removeAttribute("tabIndex");

        this.container.style.removeProperty("--md-comp-ripple-radius");

        this.trigger.classList.remove("md-ripple--trigger");

        this.trigger.removeEventListener("pointerenter", this._handlePointerenter);
        this.trigger.removeEventListener("pointerleave", this._handlePointerleave);
        this.trigger.removeEventListener("pointerdown", this._handlePointerdown);
        this.trigger.removeEventListener("focus", this._handleFocus);
        this.trigger.removeEventListener("blur", this._handleBlur);
    }
}

export { RippleController };
