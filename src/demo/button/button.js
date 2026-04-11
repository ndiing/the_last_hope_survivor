import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Label" variant="default"></md-button>
                    <md-button label="Label" variant="toggle"></md-button>
                    <md-button label="Label" variant="toggle" selected></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Label" size="extra-small" color="tonal"></md-button>
                    <md-button label="Label" size="small" color="tonal"></md-button>
                    <md-button label="Label" size="medium" color="tonal"></md-button>
                    <md-button label="Label" size="large" color="tonal"></md-button>
                    <md-button label="Label" size="extra-large" color="tonal"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Label" shape="round" color="outlined"></md-button>
                    <md-button label="Label" shape="square" color="outlined"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Label" color="elevated"></md-button>
                    <md-button label="Label" color="filled"></md-button>
                    <md-button label="Label" color="tonal"></md-button>
                    <md-button label="Label" color="outlined"></md-button>
                    <md-button label="Label" color="text"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Label" color="elevated"></md-button>
                    <md-button label="Label" color="elevated" variant="toggle"></md-button>
                    <md-button label="Label" color="elevated" variant="toggle" selected></md-button><br><br>

                    <md-button label="Label" color="filled"></md-button>
                    <md-button label="Label" color="filled" variant="toggle"></md-button>
                    <md-button label="Label" color="filled" variant="toggle" selected></md-button><br><br>

                    <md-button label="Label" color="tonal"></md-button>
                    <md-button label="Label" color="tonal" variant="toggle"></md-button>
                    <md-button label="Label" color="tonal" variant="toggle" selected></md-button><br><br>

                    <md-button label="Label" color="outlined"></md-button>
                    <md-button label="Label" color="outlined" variant="toggle"></md-button>
                    <md-button label="Label" color="outlined" variant="toggle" selected></md-button><br><br>

                    <md-button label="Label" color="text"></md-button>
                    <md-button label="Label" color="text" variant="toggle"></md-button>
                    <md-button label="Label" color="text" variant="toggle" selected></md-button><br><br>

                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Label" shape="round" variant="default"></md-button>
                    <md-button label="Label" shape="round" variant="toggle"></md-button>
                    <md-button label="Label" shape="round" variant="toggle" selected></md-button><br><br>

                    <md-button label="Label" shape="square" variant="default"></md-button>
                    <md-button label="Label" shape="square" variant="toggle"></md-button>
                    <md-button label="Label" shape="square" variant="toggle" selected></md-button><br><br>
                </md-column-item>
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button icon="edit" label="Label" variant="default"></md-button>
                    <md-button icon="edit" label="Label" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" variant="toggle" selected></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button icon="edit" label="Label" size="extra-small" color="tonal"></md-button>
                    <md-button icon="edit" label="Label" size="small" color="tonal"></md-button>
                    <md-button icon="edit" label="Label" size="medium" color="tonal"></md-button>
                    <md-button icon="edit" label="Label" size="large" color="tonal"></md-button>
                    <md-button icon="edit" label="Label" size="extra-large" color="tonal"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button icon="edit" label="Label" shape="round" color="outlined"></md-button>
                    <md-button icon="edit" label="Label" shape="square" color="outlined"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button icon="edit" label="Label" color="elevated"></md-button>
                    <md-button icon="edit" label="Label" color="filled"></md-button>
                    <md-button icon="edit" label="Label" color="tonal"></md-button>
                    <md-button icon="edit" label="Label" color="outlined"></md-button>
                    <md-button icon="edit" label="Label" color="text"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button icon="edit" label="Label" color="elevated"></md-button>
                    <md-button icon="edit" label="Label" color="elevated" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" color="elevated" variant="toggle" selected></md-button><br><br>

                    <md-button icon="edit" label="Label" color="filled"></md-button>
                    <md-button icon="edit" label="Label" color="filled" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" color="filled" variant="toggle" selected></md-button><br><br>

                    <md-button icon="edit" label="Label" color="tonal"></md-button>
                    <md-button icon="edit" label="Label" color="tonal" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" color="tonal" variant="toggle" selected></md-button><br><br>

                    <md-button icon="edit" label="Label" color="outlined"></md-button>
                    <md-button icon="edit" label="Label" color="outlined" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" color="outlined" variant="toggle" selected></md-button><br><br>

                    <md-button icon="edit" label="Label" color="text"></md-button>
                    <md-button icon="edit" label="Label" color="text" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" color="text" variant="toggle" selected></md-button><br><br>

                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button icon="edit" label="Label" shape="round" variant="default"></md-button>
                    <md-button icon="edit" label="Label" shape="round" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" shape="round" variant="toggle" selected></md-button><br><br>

                    <md-button icon="edit" label="Label" shape="square" variant="default"></md-button>
                    <md-button icon="edit" label="Label" shape="square" variant="toggle"></md-button>
                    <md-button icon="edit" label="Label" shape="square" variant="toggle" selected></md-button><br><br>
                </md-column-item>

            </md-column>
        `
    }
}

customElements.define("demo-button", DemoButton);

export default document.createElement("demo-button");
