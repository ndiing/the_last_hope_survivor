import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoIconButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" variant="default"></md-icon-button>

                    <md-icon-button icon="edit" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" variant="toggle" selected></md-icon-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="play_arrow" size="extra-small" color="tonal"></md-icon-button>
                    <md-icon-button icon="play_arrow" size="small" color="tonal"></md-icon-button>
                    <md-icon-button icon="play_arrow" size="medium" color="tonal"></md-icon-button>
                    <md-icon-button icon="play_arrow" size="large" color="tonal"></md-icon-button>
                    <md-icon-button icon="play_arrow" size="extra-large" color="tonal"></md-icon-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="share" shape="round" color="outlined"></md-icon-button>
                    <md-icon-button icon="share" shape="square" color="outlined"></md-icon-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="videocam" color="filled"></md-icon-button>
                    <md-icon-button icon="videocam" color="tonal"></md-icon-button>
                    <md-icon-button icon="videocam" color="outlined"></md-icon-button>
                    <md-icon-button icon="videocam" color="standard"></md-icon-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="more_vert" width="narrow"></md-icon-button>
                    <md-icon-button icon="more_vert" width="default"></md-icon-button>
                    <md-icon-button icon="more_vert" width="wide"></md-icon-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" color="tonal" shape="round" ></md-icon-button><br><br>
                    <md-icon-button icon="edit" color="tonal" shape="square"  ></md-icon-button><br><br>

                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" color="tonal" shape="round" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" color="tonal" shape="round" variant="toggle" selected></md-icon-button><br><br>

                    <md-icon-button icon="edit" color="tonal" shape="square" variant="toggle"></md-icon-button>
                    <md-icon-button icon="edit" color="tonal" shape="square" variant="toggle" selected></md-icon-button><br><br>

                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="edit" size="extra-small" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-small" color="filled"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-small" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-small" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="small" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="small" color="filled"></md-icon-button>
                    <md-icon-button icon="edit" size="small" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="edit" size="small" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="medium" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" color="filled"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="edit" size="medium" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="large" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="large" color="filled"></md-icon-button>
                    <md-icon-button icon="edit" size="large" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="edit" size="large" color="tonal" width="wide"></md-icon-button><br><br>

                    <md-icon-button icon="edit" size="extra-large" color="outlined"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" color="filled"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" color="tonal" width="narrow"></md-icon-button>
                    <md-icon-button icon="edit" size="extra-large" color="tonal" width="wide"></md-icon-button><br><br>

                </md-column-item>

            </md-column>
        `
    }
}

customElements.define("demo-icon-button", DemoIconButton);

export default document.createElement("demo-icon-button");
