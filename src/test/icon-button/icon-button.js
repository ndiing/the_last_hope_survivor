import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestIconButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column>
                
                <!-- <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" variant="default"></md-icon-button>
                    <md-icon-button icon="image" variant="toggle"></md-icon-button>
                </md-layout-column-item> -->

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" size="extra-small"></md-icon-button>
                    <md-icon-button icon="image" size="small"></md-icon-button>
                    <md-icon-button icon="image" size="medium"></md-icon-button>
                    <md-icon-button icon="image" size="large"></md-icon-button>
                    <md-icon-button icon="image" size="extra-large"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" size="extra-small" width="narrow"></md-icon-button>
                    <md-icon-button icon="image" size="small" width="narrow"></md-icon-button>
                    <md-icon-button icon="image" size="medium" width="narrow"></md-icon-button>
                    <md-icon-button icon="image" size="large" width="narrow"></md-icon-button>
                    <md-icon-button icon="image" size="extra-large" width="narrow"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" size="extra-small" width="wide"></md-icon-button>
                    <md-icon-button icon="image" size="small" width="wide"></md-icon-button>
                    <md-icon-button icon="image" size="medium" width="wide"></md-icon-button>
                    <md-icon-button icon="image" size="large" width="wide"></md-icon-button>
                    <md-icon-button icon="image" size="extra-large" width="wide"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" size="extra-small" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="small" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="medium" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="large" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="extra-large" shape="square"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" size="extra-small" width="narrow" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="small" width="narrow" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="medium" width="narrow" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="large" width="narrow" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="extra-large" width="narrow" shape="square"></md-icon-button>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" size="extra-small" width="wide" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="small" width="wide" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="medium" width="wide" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="large" width="wide" shape="square"></md-icon-button>
                    <md-icon-button icon="image" size="extra-large" width="wide" shape="square"></md-icon-button>
                </md-layout-column-item>

                <!-- <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" shape="round"></md-icon-button>
                    <md-icon-button icon="image" shape="square"></md-icon-button>
                </md-layout-column-item> -->

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" color="filled"></md-icon-button>
                    <md-icon-button icon="image" color="tonal"></md-icon-button>
                    <md-icon-button icon="image" color="outlined"></md-icon-button>
                    <md-icon-button icon="image" color="standard"></md-icon-button>
                </md-layout-column-item>

                <!-- <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-icon-button icon="image" width="default"></md-icon-button>
                    <md-icon-button icon="image" width="narrow"></md-icon-button>
                    <md-icon-button icon="image" width="wide"></md-icon-button>
                </md-layout-column-item> -->

            </md-layout-column>
        `
    }
}

customElements.define("test-icon-button", TestIconButton);

export default document.createElement("test-icon-button");
