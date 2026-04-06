import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoIconButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column style="padding:24px;">

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" variant="default"></md-icon-button>
                    <md-icon-button icon='["menu","menu_open"]' variant="toggle"></md-icon-button>
                    <md-icon-button icon='["menu","menu_open"]' variant="toggle" selected></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" variant="default"></md-icon-button>
                    <md-icon-button icon="more_vert" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" variant="toggle" selected></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" size="extra-small" color="tonal"></md-icon-button>
                    <md-icon-button icon="more_vert" size="small" color="tonal"></md-icon-button>
                    <md-icon-button icon="more_vert" size="medium" color="tonal"></md-icon-button>
                    <md-icon-button icon="more_vert" size="large" color="tonal"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-large" color="tonal"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" shape="round" color="outlined"></md-icon-button>
                    <md-icon-button icon="more_vert" shape="square" color="outlined"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" color="filled"></md-icon-button>
                    <md-icon-button icon="more_vert" color="tonal"></md-icon-button>
                    <md-icon-button icon="more_vert" color="outlined"></md-icon-button>
                    <md-icon-button icon="more_vert" color="standard"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" width="narrow"></md-icon-button>
                    <md-icon-button icon="more_vert" width="default"></md-icon-button>
                    <md-icon-button icon="more_vert" width="wide"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" color="filled" shape="round"></md-icon-button>
                    <md-icon-button icon="more_vert" color="tonal" shape="round"></md-icon-button>
                    <md-icon-button icon="more_vert" color="outlined" shape="round"></md-icon-button>
                    <md-icon-button icon="more_vert" color="standard" shape="round"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" color="filled" shape="square"></md-icon-button>
                    <md-icon-button icon="more_vert" color="tonal" shape="square"></md-icon-button>
                    <md-icon-button icon="more_vert" color="outlined" shape="square"></md-icon-button>
                    <md-icon-button icon="more_vert" color="standard" shape="square"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" color="filled" shape="round" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="filled" shape="round" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" color="tonal" shape="round" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="tonal" shape="round" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" color="outlined" shape="round" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="outlined" shape="round" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" color="standard" shape="round" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="standard" shape="round" variant="toggle" selected></md-icon-button><br><br>

                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" color="filled" shape="square" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="filled" shape="square" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" color="tonal" shape="square" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="tonal" shape="square" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" color="outlined" shape="square" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="outlined" shape="square" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" color="standard" shape="square" variant="toggle"></md-icon-button>
                    <md-icon-button icon="more_vert" color="standard" shape="square" variant="toggle" selected></md-icon-button><br><br>

                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" size="extra-small" color="outlined"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-small" color="filled"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-small" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-small" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" size="small" color="outlined"></md-icon-button>
                    <md-icon-button icon="more_vert" size="small" color="filled"></md-icon-button>
                    <md-icon-button icon="more_vert" size="small" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="more_vert" size="small" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" size="medium" color="outlined"></md-icon-button>
                    <md-icon-button icon="more_vert" size="medium" color="filled"></md-icon-button>
                    <md-icon-button icon="more_vert" size="medium" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="more_vert" size="medium" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" size="large" color="outlined"></md-icon-button>
                    <md-icon-button icon="more_vert" size="large" color="filled"></md-icon-button>
                    <md-icon-button icon="more_vert" size="large" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="more_vert" size="large" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="more_vert" size="extra-large" color="outlined"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-large" color="filled"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-large" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-large" color="tonal" width="wide"></md-icon-button><br><br>

                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" size="extra-small" color="outlined" shape="round"></md-icon-button>
                    <md-icon-button icon="more_vert" size="small" color="outlined" shape="round"></md-icon-button>
                    <md-icon-button icon="more_vert" size="medium" color="outlined" shape="round"></md-icon-button>
                    <md-icon-button icon="more_vert" size="large" color="outlined" shape="round"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-large" color="outlined" shape="round"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" size="extra-small" color="outlined" shape="square"></md-icon-button>
                    <md-icon-button icon="more_vert" size="small" color="outlined" shape="square"></md-icon-button>
                    <md-icon-button icon="more_vert" size="medium" color="outlined" shape="square"></md-icon-button>
                    <md-icon-button icon="more_vert" size="large" color="outlined" shape="square"></md-icon-button>
                    <md-icon-button icon="more_vert" size="extra-large" color="outlined" shape="square"></md-icon-button>
                </md-layout-column-item>

            </md-layout-column>
        `
    }
}

customElements.define("demo-icon-button", DemoIconButton);

export default document.createElement("demo-icon-button");
