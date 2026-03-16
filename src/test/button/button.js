import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { BreakpointObserver } from "../../material/breakpoint/breakpoint.js";

class TestButton extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-layout-column >

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" color="filled"></md-button>
                    <md-button label="button" color="filled" variant="toggle"></md-button>
                    <md-button label="button" color="filled" variant="toggle" selected></md-button>

                    <br><br>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" size="extra-small" color="tonal"></md-button>
                    <md-button label="button" size="small" color="tonal"></md-button>
                    <md-button label="button" size="medium" color="tonal"></md-button>
                    <md-button label="button" size="large" color="tonal"></md-button>
                    <md-button label="button" size="extra-large" color="tonal"></md-button>

                    <br><br>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" shape="round" color="outlined"></md-button>
                    <md-button label="button" shape="square" color="outlined"></md-button>

                    <br><br>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" color="elevated"></md-button>
                    <md-button label="button" color="filled"></md-button>
                    <md-button label="button" color="tonal"></md-button>
                    <md-button label="button" color="outlined"></md-button>
                    <md-button label="button" color="standard"></md-button>

                    <br><br>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" icon="edit" color="elevated"></md-button>
                    <md-button label="button" icon="edit" color="elevated" variant="toggle"></md-button>
                    <md-button label="button" icon="edit" color="elevated" variant="toggle" selected></md-button><br><br>

                    <md-button label="button" icon="edit" color="filled"></md-button>
                    <md-button label="button" icon="edit" color="filled" variant="toggle"></md-button>
                    <md-button label="button" icon="edit" color="filled" variant="toggle" selected></md-button><br><br>

                    <md-button label="button" icon="edit" color="tonal"></md-button>
                    <md-button label="button" icon="edit" color="tonal" variant="toggle"></md-button>
                    <md-button label="button" icon="edit" color="tonal" variant="toggle" selected></md-button><br><br>

                    <md-button label="button" icon="edit" color="outlined"></md-button>
                    <md-button label="button" icon="edit" color="outlined" variant="toggle"></md-button>
                    <md-button label="button" icon="edit" color="outlined" variant="toggle" selected></md-button><br><br>

                    <md-button label="button" icon="edit" color="standard"></md-button>
                    <md-button label="button" icon="edit" color="standard" variant="toggle"></md-button>
                    <md-button label="button" icon="edit" color="standard" variant="toggle" selected></md-button>

                    <br><br>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" shape="round" color="outlined" variant="toggle"></md-button>
                    <md-button label="button" shape="round" color="outlined" variant="toggle"selected></md-button><br><br>

                    <md-button label="button" shape="square" color="outlined" variant="toggle"></md-button>
                    <md-button label="button" shape="square" color="outlined" variant="toggle"selected></md-button>

                    <br><br>
                </md-layout-column-item>

                
                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" size="extra-small" color="tonal"></md-button>
                    <md-button label="button" icon="edit" size="extra-small" color="tonal"></md-button><br><br>

                    <md-button label="button" size="small" color="tonal"></md-button>
                    <md-button label="button" icon="edit" size="small" color="tonal"></md-button><br><br>

                    <md-button label="button" size="medium" color="tonal"></md-button>
                    <md-button label="button" icon="edit" size="medium" color="tonal"></md-button><br><br>

                    <md-button label="button" size="large" color="tonal"></md-button>
                    <md-button label="button" icon="edit" size="large" color="tonal"></md-button><br><br>

                    <md-button label="button" size="extra-large" color="tonal"></md-button>
                    <md-button label="button" icon="edit" size="extra-large" color="tonal"></md-button>

                    <br><br>
                </md-layout-column-item>

                <md-layout-column-item expanded="12" medium="8" compact="4">
                    <md-button label="button" size="extra-small" color="outlined"></md-button>
                    <md-button label="button" size="small" color="outlined"></md-button>
                    <md-button label="button" size="medium" color="outlined"></md-button>
                    <md-button label="button" size="large" color="outlined"></md-button>
                    <md-button label="button" size="extra-large" color="outlined"></md-button><br><br>

                    <md-button label="button" size="extra-small" color="outlined" shape="square"></md-button>
                    <md-button label="button" size="small" color="outlined" shape="square"></md-button>
                    <md-button label="button" size="medium" color="outlined" shape="square"></md-button>
                    <md-button label="button" size="large" color="outlined" shape="square"></md-button>
                    <md-button label="button" size="extra-large" color="outlined" shape="square"></md-button>

                    <br><br>
                </md-layout-column-item>


            </md-layout-column>
        `
    }
}

customElements.define("test-button", TestButton);

export default document.createElement("test-button");
