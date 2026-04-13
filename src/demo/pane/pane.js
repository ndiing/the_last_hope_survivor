import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoPane extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-pane
                fit
                .leading="${[{component:'icon',icon:'image'}]}"
                .headline="${"Headline"}"
                .subtitle="${"Subtitle"}"
                .trailing="${[
                    {component:'icon',icon:'image'},
                    {component:'icon',icon:'image'},
                    {component:'icon',icon:'image'},
                ]}"
                .buttons="${[
                    {component:'button',label:'Reset'},
                    {component:'button',label:'Submit'},
                ]}"
            >
                <md-pane-body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum aspernatur repellendus mollitia qui, praesentium a optio ipsum rem ad facilis, tempora commodi eos consequuntur alias! Adipisci aut nesciunt dicta?</p>
                    <p>Eius consectetur deleniti at deserunt nihil, culpa repudiandae odit doloribus iure rerum voluptatem ab quas asperiores praesentium fuga eos et ut enim aspernatur pariatur a. Quod quo inventore sit reiciendis.</p>
                    <p>Quam eveniet eaque vero temporibus voluptas voluptate quia molestiae. Exercitationem omnis atque odio. Minus cupiditate voluptates, repellat amet, temporibus qui commodi, impedit ipsum ea aliquid neque maxime quod animi ut.</p>
                    <p>Assumenda dicta tempore, debitis consectetur at quaerat, vitae sint molestiae exercitationem ad voluptate tempora expedita facere voluptates incidunt omnis possimus. Veniam sequi ea alias doloremque voluptatem architecto illo quis modi?</p>
                    <p>Soluta ipsam sit repudiandae voluptatibus sint blanditiis laboriosam tempora nulla fuga incidunt nemo voluptatem eum, architecto unde cupiditate. Quam maxime aperiam neque dolorem quisquam tempora voluptatum quidem placeat nostrum autem.</p>
                </md-pane-body>
            </md-pane>
        `
    }
}

customElements.define("demo-pane", DemoPane);

export default document.createElement("demo-pane");
