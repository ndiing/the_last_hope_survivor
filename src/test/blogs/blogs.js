import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestBlogs extends MDComponent{
    render(){
        return html`
            <h1>Blogs</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('test-blogs', TestBlogs)

export default document.createElement('test-blogs')
