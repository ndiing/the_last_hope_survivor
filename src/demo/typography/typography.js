import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoTypography extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>

                <md-layout-column-item expanded="12" medium="4" compact="4">
                    <md-typography scale="display-large">Display Large</md-typography>
                    <md-typography scale="display-medium">Display Medium</md-typography>
                    <md-typography scale="display-small">Display Small</md-typography>
                    <md-typography scale="headline-large">Headline Large</md-typography>
                    <md-typography scale="headline-medium">Headline Medium</md-typography>
                    <md-typography scale="headline-small">Headline Small</md-typography>
                    <md-typography scale="title-large">Title Large</md-typography>
                    <md-typography scale="title-medium">Title Medium</md-typography>
                    <md-typography scale="title-small">Title Small</md-typography>
                    <md-typography scale="body-large">Body Large</md-typography>
                    <md-typography scale="body-medium">Body Medium</md-typography>
                    <md-typography scale="body-small">Body Small</md-typography>
                    <md-typography scale="label-large">Label Large</md-typography>
                    <md-typography scale="label-medium">Label Medium</md-typography>
                    <md-typography scale="label-small">Label Small</md-typography>
                </md-layout-column-item>

                

            </md-layout-column>
        `
    }
}

customElements.define("demo-typography", DemoTypography);

export default document.createElement("demo-typography");
