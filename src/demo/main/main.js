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
            { id: "66", label: "Libraries", children: [
                { id: "1", routerLink: "/ripple", label: "Ripple" },
                { id: "2", routerLink: "/breakpoint", label: "Breakpoint" },
                { id: "3", routerLink: "/color", label: "Color" },
                // { id: "4", routerLink: "/virtual-scroll", label: "Virtual Scroll" },
            ]},
            { id: "5", label: "Components", children: [
                { id: "6", label: "Layout", children: [
                    { id: "7", routerLink: "/layout", label: "Layout Scaffold" },
                    // { id: "8", routerLink: "/layout", label: "Layout Header" },
                    // { id: "9", routerLink: "/layout", label: "Layout Body" },
                    // { id: "10", routerLink: "/layout", label: "Layout Footer" },
                    { id: "11", routerLink: "/scrim", label: "Scrim" },
                    { id: "12", routerLink: "/layout-column", label: "Layout Column" },
                    { id: "13", routerLink: "/layout-column-expanded", label: "Layout Column Expanded" },
                    { id: "14", routerLink: "/layout-column-medium", label: "Layout Column Medium" },
                    { id: "15", routerLink: "/layout-column-compact", label: "Layout Column Compact" },
                    { id: "16", routerLink: "/layout-border", label: "Layout Border" },
                    { id: "17", routerLink: "/layout-border-modal", label: "Layout Border Modal" },
                ]},
                { id: "18", routerLink: "/icon", label: "Icon" },
                { id: "19", routerLink: "/emoji", label: "Emoji" },
                { id: "20", routerLink: "/image", label: "Image" },
                { id: "21", routerLink: "/avatar", label: "Avatar" },
                { id: "22", routerLink: "/text", label: "Text" },
                { id: "23", routerLink: "/pane", label: "Pane" },
                { id: "24", routerLink: "/form", label: "Form" },
                { id: "25", routerLink: "/tool-group", label: "Tool Group" },
                // { id: "26", routerLink: "/app-bar", label: "App Bar" },
                { id: "27", routerLink: "/badge", label: "Badge" },
                { id: "28", label: "Button", children: [
                    // { id: "29", routerLink: "/button-group", label: "Button Group" },
                    { id: "30", routerLink: "/button", label: "Button" },
                    { id: "31", routerLink: "/extended-fab", label: "Extended Fab" },
                    // { id: "32", routerLink: "/fab-menu", label: "Fab Menu" },
                    { id: "33", routerLink: "/fab", label: "Fab" },
                    { id: "34", routerLink: "/icon-button", label: "Icon Button" },
                    // { id: "35", routerLink: "/segmented-button", label: "Segmented Button" },
                    // { id: "36", routerLink: "/split-button", label: "Split Button" },
                ]},
                // { id: "37", routerLink: "/card", label: "Card" },
                // { id: "38", routerLink: "/carousel", label: "Carousel" },
                { id: "39", routerLink: "/checkbox", label: "Checkbox" },
                // { id: "40", routerLink: "/chip", label: "Chip" },
                // { id: "41", label: "Date & Time Picker", children: [
                //     { id: "42", routerLink: "/date-picker", label: "Date Picker" },
                //     { id: "43", routerLink: "/time-picker", label: "Time Picker" },
                // ]},
                // { id: "44", routerLink: "/dialog", label: "Dialog" },
                { id: "45", routerLink: "/divider", label: "Divider" },
                { id: "46", label: "List", children: [
                    { id: "47", routerLink: "/list", label: "List" },
                    { id: "48", routerLink: "/list-behavior", label: "List Behavior" },
                    { id: "49", routerLink: "/list-interaction", label: "List Interaction" },
                ]},
                { id: "50", routerLink: "/tree", label: "Tree" },
                { id: "51", routerLink: "/push-menu", label: "Push Menu" },
                // { id: "52", label: "Loading & Progress", children: [
                //     { id: "53", routerLink: "/loading-indicator", label: "Loading Indicator" },
                //     { id: "54", routerLink: "/progress-indicator", label: "Progress Indicator" },
                // ]},
                // { id: "55", routerLink: "/menu", label: "Menu" },
                { id: "56", label: "Navigation", children: [
                    { id: "57", routerLink: "/navigation-bar", label: "Navigation Bar" },
                    // { id: "58", routerLink: "/navigation-bar-vertical", label: "Navigation Bar Vertical" },
                    // { id: "59", routerLink: "/navigation-bar-vertical-badge", label: "Navigation Bar Vertical" },
                    // { id: "60", routerLink: "/navigation-bar-horizontal", label: "Navigation Bar Horizontal" },
                    { id: "61", routerLink: "/navigation-bar-horizontal-badge", label: "Navigation Bar Horizontal" },

                    { id: "62", routerLink: "/navigation-rail", label: "Navigation Rail" },
                    { id: "63", routerLink: "/navigation-rail-with-icon", label: "Navigation Rail With Icon" },
                    { id: "64", routerLink: "/navigation-rail-with-fab", label: "Navigation Rail With Fab" },
                    { id: "65", routerLink: "/navigation-rail-with-icon-and-fab", label: "Navigation Rail With Icon And Fab" },
                    
                    { id: "0", routerLink: "/navigation-drawer", label: "Navigation Drawer" },
                    { id: "68", routerLink: "/navigation-drawer-layout-list-format-flat", label: "Navigation Drawer List Flat" },
                    { id: "69", routerLink: "/navigation-drawer-layout-list-format-nested-modal", label: "Navigation Drawer List Modal" },

                    { id: "70", routerLink: "/navigation-drawer-layout-tree-format-nested", label: "Navigation Drawer Tree Nested" },
                    { id: "71", routerLink: "/navigation-drawer-layout-tree-format-flat", label: "Navigation Drawer Tree Flat" },
                    { id: "72", routerLink: "/navigation-drawer-layout-tree-format-nested-modal", label: "Navigation Drawer Tree Modal" },

                    { id: "73", routerLink: "/navigation-drawer-layout-push-menu-format-nested", label: "Navigation Drawer Push Menu Nested" },
                    { id: "74", routerLink: "/navigation-drawer-layout-push-menu-format-flat", label: "Navigation Drawer Push Menu Flat" },
                    { id: "75", routerLink: "/navigation-drawer-layout-push-menu-format-nested-modal", label: "Navigation Drawer Push Menu Modal" },
                ]},
                { id: "76", routerLink: "/radio-button", label: "Radio Button" },
                // { id: "77", routerLink: "/search", label: "Search" },
                // { id: "78", label: "Sheet", children: [
                //     { id: "79", routerLink: "/bottom-sheet", label: "Bottom Sheet" },
                //     { id: "80", routerLink: "/side-sheet", label: "Side Sheet" },
                // ]},
                // { id: "81", routerLink: "/slider", label: "Slider" },
                // { id: "82", routerLink: "/snackbar", label: "Snackbar" },
                { id: "83", routerLink: "/switch", label: "Switch" },
                // { id: "84", routerLink: "/tab", label: "Tab" },
                // { id: "85", routerLink: "/text-field", label: "Text Field" },
                // { id: "86", routerLink: "/toolbar", label: "Toolbar" },
                // { id: "87", routerLink: "/tooltip", label: "Tooltip" },
            ]},
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

        // kalau kita pakai behavior dari windows explorer, yang ada children / folder berarti di atas
        // tapi kalau kita pakai behavior dari m3, harusnya di abaikan, dan sort by alphabet
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
