import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestBlog extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <h1>Blog</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define("test-blog", TestBlog);

export default document.createElement("test-blog");
