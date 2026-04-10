// import { html } from "lit";
// import { MDComponent } from "../../material/component/component.js";

// class DemoTest extends MDComponent {
//     static properties = {
//         content: { state: true },
//     };
//     constructor() {
//         super();
//         this.items = [
//             { id: "1", label: "Item 1" },
//             { id: "2", label: "Item 2" },
//             { id: "3", label: "Item 3" },
//         ];
//         this.contents = {
//             1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi deserunt asperiores, reiciendis ducimus repellendus deleniti adipisci neque consequuntur non accusantium, commodi fugit, corrupti debitis quae dolorum. Vel repudiandae perferendis dolorem!",
//             2: "Consequuntur natus dignissimos, inventore labore quod similique illo animi iusto? Unde, commodi provident laboriosam voluptatibus expedita debitis, nobis quos voluptate fugiat libero mollitia facere ipsam quisquam doloremque quis esse praesentium!",
//             3: "Mollitia, voluptate. Amet libero, qui et sequi consequuntur corporis quis. Quod magnam aspernatur distinctio harum, modi accusantium natus eum corporis libero omnis, earum aperiam rerum, ab amet voluptatem. Quam, sapiente?",
//         };
//         this.content = this.contents["1"];
//     }

//     async _handleLinkClick(event) {
//         const snapshot = event.currentTarget.snapshot;

//         const transition = document.startViewTransition(() => {
//             this.content = this.contents[snapshot.id];
//         });

//         await transition.finished;
//     }
//     render() {
//         /* prettier-ignore */
//         return html`
//             <div class="x-layout">
//                 <div class="x-layout__header">
//                     ${this.items.map(item=>html`<div .snapshot="${item}" class="x-layout__link" @click="${this._handleLinkClick}">${item.label}</div>`)}
//                 </div>
//                 <div class="x-layout__body">${this.content}</div>
//             </div>
//         `
//     }
// }

// customElements.define("demo-test", DemoTest);

// export default document.createElement("demo-test");

import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTest extends MDComponent {

    
    render() {
        /* prettier-ignore */
        return html`
            <div class="md-pane">
                <div class="md-pane__header">
                    <div class="md-pane__tool-group">
                        <md-icon-button class="md-pane__tool" icon="image" color="standard"></md-icon-button>
                    </div>
                    <div class="md-pane__content">
                        <div class="md-pane__headline">Headline</div>
                        <div class="md-pane__subtitle">Subtitle</div>
                    </div>
                    <div class="md-pane__tool-group">
                        <md-icon-button class="md-pane__tool" icon="image" color="standard"></md-icon-button>
                        <md-icon-button class="md-pane__tool" icon="image" color="standard"></md-icon-button>
                        <md-icon-button class="md-pane__tool" icon="image" color="standard"></md-icon-button>
                    </div>
                </div>
                <div class="md-pane__body">
                    <div class="md-pane__main">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis in quo nisi dolore, sapiente corrupti delectus voluptatem id maiores quis incidunt eaque porro nobis optio at similique quaerat voluptates quibusdam.</p>
                    </div>
                    <div class="md-pane__footer">
                        <md-button class="md-pane__button" label="Reset" color="standard"></md-button>
                        <md-button class="md-pane__button" label="Submit" color="standard"></md-button>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("demo-test", DemoTest);

export default document.createElement("demo-test");
