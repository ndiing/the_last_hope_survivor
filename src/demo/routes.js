import testMain from "./main/main.js";
import testNotFound from "./not-found/not-found.js";

/* prettier-ignore */
const routes = [
    {path:'/',label:'',component:testMain,children:[
        // {path:'/ripple',label:'Ripple',load:() => import('./ripple/ripple.js').then(module=>module.default),},
        // {path:'/breakpoint',load:() => import('./breakpoint/breakpoint.js').then(module=>module.default),},      


        {path:'/scrim',label:'Scrim',load:() => import('./scrim/scrim.js').then(module=>module.default)},

        {path:'/layout-column',label:'Layout Column',load:() => import('./layout-column/layout-column.js').then(module=>module.default)},
        {path:'/layout-column-expanded',label:'Layout Column Expanded',load:() => import('./layout-column-expanded/layout-column-expanded.js').then(module=>module.default)},
        {path:'/layout-column-medium',label:'Layout Column Medium',load:() => import('./layout-column-medium/layout-column-medium.js').then(module=>module.default)},
        {path:'/layout-column-compact',label:'Layout Column Compact',load:() => import('./layout-column-compact/layout-column-compact.js').then(module=>module.default)},

        {path:'/layout-border',label:'Layout Border',load:() => import('./layout-border/layout-border.js').then(module=>module.default)},
        {path:'/layout-border-modal',label:'Layout Border Modal',load:() => import('./layout-border-modal/layout-border-modal.js').then(module=>module.default)},

        {path:'/icon',label:'Icon',load:() => import('./icon/icon.js').then(module=>module.default)},
        {path:'/emoji',label:'Emoji',load:() => import('./emoji/emoji.js').then(module=>module.default)},
        {path:'/image',label:'Image',load:() => import('./image/image.js').then(module=>module.default)},
        {path:'/avatar',label:'Avatar',load:() => import('./avatar/avatar.js').then(module=>module.default)},
        // {path:'/text',label:'Text',load:() => import('./text/text.js').then(module=>module.default),},

        {path:'/form',label:'Form',load:() => import('./form/form.js').then(module=>module.default),},

        {path:'/tool',label:'Tool',load:() => import('./tool/tool.js').then(module=>module.default),},
        {path:'/tool-group',label:'Tool Group',load:() => import('./tool-group/tool-group.js').then(module=>module.default),},      

        // {path:'/app-bar',label:'App Bar',load:() => import('./app-bar/app-bar.js').then(module=>module.default)},
        // {path:'/badge',label:'Badge',load:() => import('./badge/badge.js').then(module=>module.default)},
        // {path:'/button-group',label:'Button Group',load:() => import('./button-group/button-group.js').then(module=>module.default)},
        // {path:'/button',label:'Button',load:() => import('./button/button.js').then(module=>module.default)},
        // {path:'/extended-fab',label:'Extended Fab',load:() => import('./extended-fab/extended-fab.js').then(module=>module.default)},
        // {path:'/fab-menu',label:'Fab Menu',load:() => import('./fab-menu/fab-menu.js').then(module=>module.default)},
        // {path:'/fab',label:'Fab',load:() => import('./fab/fab.js').then(module=>module.default)},
        // {path:'/icon-button',label:'Icon Button',load:() => import('./icon-button/icon-button.js').then(module=>module.default)},
        // {path:'/segmented-button',label:'Segmented Button',load:() => import('./segmented-button/segmented-button.js').then(module=>module.default)},
        // {path:'/split-button',label:'Split Button',load:() => import('./split-button/split-button.js').then(module=>module.default)},
        // {path:'/card',label:'Card',load:() => import('./card/card.js').then(module=>module.default)},
        // {path:'/carousel',label:'Carousel',load:() => import('./carousel/carousel.js').then(module=>module.default)},
        {path:'/checkbox',label:'Checkbox',load:() => import('./checkbox/checkbox.js').then(module=>module.default)},
        // {path:'/chip',label:'Chip',load:() => import('./chip/chip.js').then(module=>module.default)},
        // {path:'/date-picker',label:'Date Picker',load:() => import('./date-picker/date-picker.js').then(module=>module.default)},
        // {path:'/time-picker',label:'Time Picker',load:() => import('./time-picker/time-picker.js').then(module=>module.default)},
        // {path:'/dialog',label:'Dialog',load:() => import('./dialog/dialog.js').then(module=>module.default)},
        // {path:'/divider',label:'Divider',load:() => import('./divider/divider.js').then(module=>module.default)},
        // {path:'/list-item',label:'List Item',load:() => import('./list-item/list-item.js').then(module=>module.default),},
        {path:'/list',label:'List',load:() => import('./list/list.js').then(module=>module.default)},
        {path:'/list-behavior',label:'List Behavior',load:() => import('./list-behavior/list-behavior.js').then(module=>module.default)},
        // {path:'/loading-indicator',label:'Loading Indicator',load:() => import('./loading-indicator/loading-indicator.js').then(module=>module.default)},
        // {path:'/progress-indicator',label:'Progress Indicator',load:() => import('./progress-indicator/progress-indicator.js').then(module=>module.default)},
        // {path:'/menu',label:'Menu',load:() => import('./menu/menu.js').then(module=>module.default)},
        // {path:'/navigation-bar',label:'Navigation Bar',load:() => import('./navigation-bar/navigation-bar.js').then(module=>module.default)},
        // {path:'/navigation-drawer',label:'Navigation Drawer',load:() => import('./navigation-drawer/navigation-drawer.js').then(module=>module.default)},
        // {path:'/navigation-rail',label:'Navigation Rail',load:() => import('./navigation-rail/navigation-rail.js').then(module=>module.default)},  
        {path:'/radio-button',label:'Radio Button',load:() => import('./radio-button/radio-button.js').then(module=>module.default)},
        // {path:'/search',label:'Search',load:() => import('./search/search.js').then(module=>module.default)},
        // {path:'/bottom-sheet',label:'Bottom Sheet',load:() => import('./bottom-sheet/bottom-sheet.js').then(module=>module.default)},
        // {path:'/side-sheet',label:'Side Sheet',load:() => import('./side-sheet/side-sheet.js').then(module=>module.default)},
        // {path:'/slider',label:'Slider',load:() => import('./slider/slider.js').then(module=>module.default)},
        // {path:'/snackbar',label:'Snackbar',load:() => import('./snackbar/snackbar.js').then(module=>module.default)},
        {path:'/switch',label:'Switch',load:() => import('./switch/switch.js').then(module=>module.default)},
        // {path:'/tab',label:'Tab',load:() => import('./tab/tab.js').then(module=>module.default)},
        // {path:'/text-field',label:'Text Field',load:() => import('./text-field/text-field.js').then(module=>module.default)},
        // {path:'/toolbar',label:'Toolbar',load:() => import('./toolbar/toolbar.js').then(module=>module.default)},
        // {path:'/tooltip',label:'Tooltip',load:() => import('./tooltip/tooltip.js').then(module=>module.default)},
    ]},
    {path:'*',component:testNotFound,redirectTo:'/'},
]

export { routes };
