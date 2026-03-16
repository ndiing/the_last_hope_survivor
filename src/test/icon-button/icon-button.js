import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestIconButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column >
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" variant="default"></md-icon-button>
                    <md-icon-button icon="edit" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" variant="toggle" selected></md-icon-button>

                    <br><br>
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" size="extra-small" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="small" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="large" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" color="tonal"></md-icon-button>

                    <br><br>
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" shape="round" color="outlined"></md-icon-button><br><br>
                    <md-icon-button icon="edit" shape="square" color="outlined"></md-icon-button>

                    <br><br>
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" color="filled"></md-icon-button><br><br>
                    <md-icon-button icon="edit" color="tonal"></md-icon-button><br><br>
                    <md-icon-button icon="edit" color="outlined"></md-icon-button><br><br>
                    <md-icon-button icon="edit" color="standard"></md-icon-button>

                    <br><br>
                </md-layout-column-item>
                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" width="narrow" color="filled"></md-icon-button><br><br>
                    <md-icon-button icon="edit" width="default" color="filled"></md-icon-button><br><br>
                    <md-icon-button icon="edit" width="wide" color="filled"></md-icon-button>

                    <br><br>
                </md-layout-column-item>

                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" color="filled"></md-icon-button>
                    <md-icon-button icon="edit" color="filled" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" color="filled" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="edit" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" color="tonal" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" color="tonal" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="edit" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" color="outlined" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" color="outlined" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="edit" color="standard"></md-icon-button>
                    <md-icon-button icon="edit" color="standard" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" color="standard" variant="toggle" selected></md-icon-button>

                    <br><br>
                </md-layout-column-item>
                

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" shape="round" color="tonal" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" shape="round" color="tonal" variant="toggle" selected></md-icon-button><br><br>
                    <md-icon-button icon="edit" shape="square" color="tonal" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" shape="square" color="tonal" variant="toggle" selected></md-icon-button>

                    <br><br>
                </md-layout-column-item>

                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" size="extra-small" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-small" width="narrow" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-small" width="wide" color="tonal"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="small" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="small" width="narrow" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="small" width="wide" color="tonal"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="medium" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" width="narrow" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" width="wide" color="tonal"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="large" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="large" width="narrow" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="large" width="wide" color="tonal"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="extra-large" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" width="narrow" color="tonal"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" width="wide" color="tonal"></md-icon-button>

                    <br><br>
                </md-layout-column-item>

                 <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" size="extra-small" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="small" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="large" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" color="outlined"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="extra-small" shape="square" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="small" shape="square" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" shape="square" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="large" shape="square" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" shape="square" color="outlined"></md-icon-button>

                    <br><br>
                </md-layout-column-item>
                
                
            </md-layout-column>
        `
    }
}

customElements.define("test-icon-button", TestIconButton);

export default document.createElement("test-icon-button");
