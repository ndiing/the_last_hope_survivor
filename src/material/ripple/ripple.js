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

    handlePointerenter(event) {
        this.container.classList.add("md-ripple--hover");
    }

    handlePointerleave(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    handlePointerdown(event) {
        window.addEventListener("pointerup", this.handlePointerup, { passive: true });
        window.addEventListener("touchend", this.handlePointerup, { passive: true });

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

    handlePointerup(event) {
        this.container.classList.remove("md-ripple--press");

        window.removeEventListener("pointerup", this.handlePointerup);
        window.removeEventListener("touchend", this.handlePointerup);
    }

    handleFocus(event) {
        this.container.classList.add("md-ripple--focus");
    }

    handleBlur(event) {
        this.container.classList.remove("md-ripple--focus");
    }

    hostConnected() {
        this.container = this.options.container || this.host;
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

        this.trigger = this.options.trigger || this.host;
        this.trigger.classList.add("md-ripple--trigger");

        this.handlePointerenter = this.handlePointerenter.bind(this);
        this.handlePointerleave = this.handlePointerleave.bind(this);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.trigger.addEventListener("pointerenter", this.handlePointerenter);
        this.trigger.addEventListener("pointerleave", this.handlePointerleave);
        this.trigger.addEventListener("pointerdown", this.handlePointerdown);
        this.trigger.addEventListener("focus", this.handleFocus);
        this.trigger.addEventListener("blur", this.handleBlur);
    }

    hostDisconnected() {
        this.container.classList.remove("md-ripple");
        this.container.classList.remove("md-ripple--bounded");
        this.container.removeAttribute("tabIndex");

        this.container.style.removeProperty("--md-comp-ripple-radius");

        this.trigger.classList.remove("md-ripple--trigger");

        this.trigger.removeEventListener("pointerenter", this.handlePointerenter);
        this.trigger.removeEventListener("pointerleave", this.handlePointerleave);
        this.trigger.removeEventListener("pointerdown", this.handlePointerdown);
        this.trigger.removeEventListener("focus", this.handleFocus);
        this.trigger.removeEventListener("blur", this.handleBlur);
    }
}

export { RippleController };
