import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { router } from "../demo.js";

class DemoMain extends MDComponent {
    static properties = {
        items: { state: true },
    };

    constructor() {
        super();

        /* prettier-ignore */
        this.items = [
            { id: "54",  label: "Libraries",children:[
                { id: "1", routerLink: "/ripple", label: "Ripple" },
                { id: "2", routerLink: "/breakpoint", label: "Breakpoint" },
                { id: "3", routerLink: "/color", label: "Color" },
                // { id: "4", routerLink: "/virtual-scroll", label: "Virtual Scroll" },
            ] },

            { id: "5",  label: "Components",children:[
                { id: "6", routerLink: "/scrim", label: "Scrim" },
    
                { id: "7",  label: "Layout ",children:[
    
                    { id: "8", routerLink: "/layout-column", label: "Column" },
                    { id: "9", routerLink: "/layout-column-expanded", label: "Column (Expanded)" },
                    { id: "10", routerLink: "/layout-column-medium", label: "Column (Medium)" },
                    { id: "11", routerLink: "/layout-column-compact", label: "Column (Compact)" },
                    { id: "12", routerLink: "/layout-border", label: "Border" },
                    { id: "13", routerLink: "/layout-border-modal", label: "Border (Modal)" },
                ] },
    
                { id: "14", routerLink: "/icon", label: "Icon" },
                { id: "15", routerLink: "/emoji", label: "Emoji" },
                { id: "16", routerLink: "/image", label: "Image" },
                { id: "17", routerLink: "/avatar", label: "Avatar" },
                { id: "18", routerLink: "/text", label: "Text" },
    
                { id: "19", routerLink: "/form", label: "Form" },
    
                { id: "20", routerLink: "/tool-group", label: "Tool Group" },
    
                // { id: "21", routerLink: "/app-bar", label: "App Bar" },
    
                { id: "22", routerLink: "/badge", label: "Badge" },
    
                { id: "23",  label: "Button",children:[
                    // { id: "24", routerLink: "/button-group", label: "Button Group" },
                    { id: "25", routerLink: "/button", label: "Button" },
                    { id: "26", routerLink: "/extended-fab", label: "Extended Fab" },
                    // { id: "27", routerLink: "/fab-menu", label: "Fab Menu" },
                    { id: "28", routerLink: "/fab", label: "Fab" },
                    { id: "29", routerLink: "/icon-button", label: "Icon Button" },
                    // { id: "30", routerLink: "/segmented-button", label: "Segmented Button" },
                    // { id: "31", routerLink: "/split-button", label: "Split Button" },
                ] },
    
                // { id: "32", routerLink: "/card", label: "Card" },
                // { id: "33", routerLink: "/carousel", label: "Carousel" },
                { id: "34", routerLink: "/checkbox", label: "Checkbox" },
                // { id: "35", routerLink: "/chip", label: "Chip" },
                // { id: "36", routerLink: "/date-picker", label: "Date Picker" },
                // { id: "37", routerLink: "/time-picker", label: "Time Picker" },
                // { id: "38", routerLink: "/dialog", label: "Dialog" },
                { id: "39", routerLink: "/divider", label: "Divider" },
    
                { id: "40",  label: "List",children:[
                    { id: "41", routerLink: "/list", label: "List" },
                    { id: "42", routerLink: "/list-behavior", label: "List Behavior" },
                    { id: "43", routerLink: "/list-interaction", label: "List Interaction" },
                ] },
    
                { id: "44", routerLink: "/tree", label: "Tree" },
                { id: "45", routerLink: "/push-menu", label: "Push Menu" },
                // { id: "46", routerLink: "/loading-indicator", label: "Loading Indicator" },
                // { id: "47", routerLink: "/progress-indicator", label: "Progress Indicator" },
                // { id: "48", routerLink: "/menu", label: "Menu" },
    
                { id: "49", routerLink: "/navigation-bar", label: "Navigation Bar" },

                { id: "50", routerLink: "/navigation-rail", label: "Navigation Rail" },

                { id: "51", label: "Navigation Drawer",children:[
                    { id: "52", routerLink: "/navigation-drawer-layout-list-format-nested", label: "List (Nested)" },
                    { id: "53", routerLink: "/navigation-drawer-layout-list-format-flat", label: "List (Flat)" },
                    { id: "0", routerLink: "/navigation-drawer-layout-list-format-nested-modal", label: "List (Modal)" },
                ] },

                { id: "55", routerLink: "/radio-button", label: "Radio Button" },
                // { id: "56", routerLink: "/search", label: "Search" },
                // { id: "57", routerLink: "/bottom-sheet", label: "Bottom Sheet" },
                // { id: "58", routerLink: "/side-sheet", label: "Side Sheet" },
                // { id: "59", routerLink: "/slider", label: "Slider" },
                // { id: "60", routerLink: "/snackbar", label: "Snackbar" },
                { id: "61", routerLink: "/switch", label: "Switch" },
                // { id: "62", routerLink: "/tab", label: "Tab" },
                // { id: "63", routerLink: "/text-field", label: "Text Field" },
                // { id: "64", routerLink: "/toolbar", label: "Toolbar" },
                // { id: "65", routerLink: "/tooltip", label: "Tooltip" },
            ] },
        ];
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-layout-border>
                <md-navigation-drawer 
                    .items="${this.items}"
                    inputFormat="nested"
                    open
                ></md-navigation-drawer>
                <md-layout-border-item region="center"><md-outlet></md-outlet></md-layout-border-item>
            </md-layout-border>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        const sort = (items) =>
            items.sort((a, b) => {
                // const aHasChildren = a.children && a.children.length > 0;
                // const bHasChildren = b.children && b.children.length > 0;

                // if (aHasChildren && !bHasChildren) return -1;
                // if (!aHasChildren && bHasChildren) return 1;

                return a.label.localeCompare(b.label);
            });

        const walk = (item) => {
            item.selected = router.path === item.routerLink;

            if (item.children?.length) {
                sort(item.children).forEach((item) => walk(item));
            }
        };

        sort(this.items).forEach((item) => walk(item));
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");
