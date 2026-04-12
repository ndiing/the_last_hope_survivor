import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoButton extends MDComponent {
    _handleButtonSelected(event) {
        const button = event.currentTarget;
        button.label = button.labels?.[~~button.selected] ?? button.label;
        button.icon = button.icons?.[~~button.selected] ?? button.icon;
    }
    render() {
        /* prettier-ignore */
        return html`
            <md-column style="padding:24px;">
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button icon="edit" label="Label" variant="default"></md-button>

                    <md-button icon="edit" label="Unselected" .labels="${['Unselected','Selected']}" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button icon="edit" label="Selected" .labels="${['Unselected','Selected']}" variant="toggle" selected @buttonSelected="${this._handleButtonSelected}"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Extra Small" size="extra-small" color="tonal"></md-button>
                    <md-button label="Small" size="small" color="tonal"></md-button>
                    <md-button label="Medium" size="medium" color="tonal"></md-button>
                    <md-button label="Large" size="large" color="tonal"></md-button>
                    <md-button label="Extra Large" size="extra-large" color="tonal"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Round" shape="round" color="outlined"></md-button>
                    <md-button label="Square" shape="square" color="outlined"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Elevated" color="elevated"></md-button>
                    <md-button label="Filled" color="filled"></md-button>
                    <md-button label="Tonal" color="tonal"></md-button>
                    <md-button label="Outlined" color="outlined"></md-button>
                    <md-button label="Text" color="text"></md-button>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Elevated button" color="elevated"></md-button>
                    <md-button label="Elevated unselected" .labels="${['Elevated unselected','Elevated selected']}" color="elevated" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button label="Elevated selected" .labels="${['Elevated unselected','Elevated selected']}" color="elevated" variant="toggle" @buttonSelected="${this._handleButtonSelected}" selected></md-button><br><br>

                    <md-button label="Filled button" color="filled"></md-button>
                    <md-button label="Filled unselected" .labels="${['Filled unselected','Filled selected']}" color="filled" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button label="Filled selected" .labels="${['Filled unselected','Filled selected']}" color="filled" variant="toggle" @buttonSelected="${this._handleButtonSelected}" selected></md-button><br><br>

                    <md-button label="Tonal button" color="tonal"></md-button>
                    <md-button label="Tonal unselected" .labels="${['Tonal unselected','Tonal selected']}" color="tonal" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button label="Tonal selected" .labels="${['Tonal unselected','Tonal selected']}" color="tonal" variant="toggle" @buttonSelected="${this._handleButtonSelected}" selected></md-button><br><br>

                    <md-button label="Outlined button" color="outlined"></md-button>
                    <md-button label="Outlined unselected" .labels="${['Outlined unselected','Outlined selected']}" color="outlined" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button label="Outlined selected" .labels="${['Outlined unselected','Outlined selected']}" color="outlined" variant="toggle" @buttonSelected="${this._handleButtonSelected}" selected></md-button><br><br>

                    <md-button label="Text button" color="text"></md-button>
                    <md-button label="Text unselected" .labels="${['Text unselected','Text selected']}" color="text" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button label="Text selected" .labels="${['Text unselected','Text selected']}" color="text" variant="toggle" @buttonSelected="${this._handleButtonSelected}" selected></md-button><br><br>

                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Learn more" shape="round" variant="default"></md-button><br><br>

                    <md-button label="Learn more" shape="square" variant="default"></md-button><br><br>
                </md-column-item>

                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button .labels="${["Play","Pause"]}" .icons="${["play_arrow","pause"]}" label="Play" icon="play_arrow" shape="round" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button .labels="${["Play","Pause"]}" .icons="${["play_arrow","pause"]}" label="Pause" icon="pause" shape="round" variant="toggle" @buttonSelected="${this._handleButtonSelected}" selected></md-button><br><br>

                    <md-button .labels="${["Play","Pause"]}" .icons="${["play_arrow","pause"]}" label="Play" icon="play_arrow" shape="square" variant="toggle" @buttonSelected="${this._handleButtonSelected}"></md-button>
                    <md-button .labels="${["Play","Pause"]}" .icons="${["play_arrow","pause"]}" label="Pause" icon="pause" shape="square" variant="toggle" @buttonSelected="${this._handleButtonSelected}" selected></md-button><br><br>
                </md-column-item>
                
                <md-column-item expanded="12" medium="8" compact="4">
                    <md-button label="Common Button" size="extra-small" color="tonal"></md-button>
                    <md-button icon="edit" label="Common Button" size="extra-small" color="tonal"></md-button><br><br>

                    <md-button label="Common Button" size="small" color="tonal"></md-button>
                    <md-button icon="edit" label="Common Button" size="small" color="tonal"></md-button><br><br>

                    <md-button label="Common Button" size="medium" color="tonal"></md-button>
                    <md-button icon="edit" label="Common Button" size="medium" color="tonal"></md-button><br><br>

                    <md-button label="Common Button" size="large" color="tonal"></md-button>
                    <md-button icon="edit" label="Common Button" size="large" color="tonal"></md-button><br><br>

                    <md-button label="Common Button" size="extra-large" color="tonal"></md-button>
                    <md-button icon="edit" label="Common Button" size="extra-large" color="tonal"></md-button><br><br>

                </md-column-item>

            </md-column>
        `
    }
}

customElements.define("demo-button", DemoButton);

export default document.createElement("demo-button");
