import testMain from "./main/main.js";
import testNotFound from "./not-found/not-found.js";

/* prettier-ignore */
const routes = [
    {id:'0',path:'/',label:'Main',component:testMain,children:[
        {id:'1',path:'/ripple',label:'Ripple',load:() => import('./ripple/ripple.js').then(module=>module.default),},
        {id:'2',path:'/breakpoint',label:'Breakpoint',load:() => import('./breakpoint/breakpoint.js').then(module=>module.default),},      
        // {id:'3',path:'/virtual-scroll',label:'Virtual Scroll',load:() => import('./virtual-scroll/virtual-scroll.js').then(module=>module.default),},



        {id:'4',path:'/scrim',label:'Scrim',load:() => import('./scrim/scrim.js').then(module=>module.default)},

        {id:'5',path:'/layout-column',label:'Layout Column',load:() => import('./layout-column/layout-column.js').then(module=>module.default)},
        {id:'6',path:'/layout-column-expanded',label:'Layout Column Expanded',load:() => import('./layout-column-expanded/layout-column-expanded.js').then(module=>module.default)},
        {id:'7',path:'/layout-column-medium',label:'Layout Column Medium',load:() => import('./layout-column-medium/layout-column-medium.js').then(module=>module.default)},
        {id:'8',path:'/layout-column-compact',label:'Layout Column Compact',load:() => import('./layout-column-compact/layout-column-compact.js').then(module=>module.default)},

        {id:'9',path:'/layout-border',label:'Layout Border',load:() => import('./layout-border/layout-border.js').then(module=>module.default)},
        {id:'10',path:'/layout-border-modal',label:'Layout Border Modal',load:() => import('./layout-border-modal/layout-border-modal.js').then(module=>module.default)},

        {id:'11',path:'/icon',label:'Icon',load:() => import('./icon/icon.js').then(module=>module.default)},
        {id:'12',path:'/emoji',label:'Emoji',load:() => import('./emoji/emoji.js').then(module=>module.default)},
        {id:'13',path:'/image',label:'Image',load:() => import('./image/image.js').then(module=>module.default)},
        {id:'14',path:'/avatar',label:'Avatar',load:() => import('./avatar/avatar.js').then(module=>module.default)},
        // {id:'15',path:'/text',label:'Text',load:() => import('./text/text.js').then(module=>module.default),},

        {id:'16',path:'/form',label:'Form',load:() => import('./form/form.js').then(module=>module.default),},

        {id:'17',path:'/tool',label:'Tool',load:() => import('./tool/tool.js').then(module=>module.default),},
        {id:'18',path:'/tool-group',label:'Tool Group',load:() => import('./tool-group/tool-group.js').then(module=>module.default),},      

        // {id:'19',path:'/app-bar',label:'App Bar',load:() => import('./app-bar/app-bar.js').then(module=>module.default)},
        {id:'20',path:'/badge',label:'Badge',load:() => import('./badge/badge.js').then(module=>module.default)},
        // {id:'21',path:'/button-group',label:'Button Group',load:() => import('./button-group/button-group.js').then(module=>module.default)},
        // {id:'22',path:'/button',label:'Button',load:() => import('./button/button.js').then(module=>module.default)},
        // {id:'23',path:'/extended-fab',label:'Extended Fab',load:() => import('./extended-fab/extended-fab.js').then(module=>module.default)},
        // {id:'24',path:'/fab-menu',label:'Fab Menu',load:() => import('./fab-menu/fab-menu.js').then(module=>module.default)},
        // {id:'25',path:'/fab',label:'Fab',load:() => import('./fab/fab.js').then(module=>module.default)},
        {id:'26',path:'/icon-button',label:'Icon Button',load:() => import('./icon-button/icon-button.js').then(module=>module.default)},
        // {id:'27',path:'/segmented-button',label:'Segmented Button',load:() => import('./segmented-button/segmented-button.js').then(module=>module.default)},
        // {id:'28',path:'/split-button',label:'Split Button',load:() => import('./split-button/split-button.js').then(module=>module.default)},
        // {id:'29',path:'/card',label:'Card',load:() => import('./card/card.js').then(module=>module.default)},
        // {id:'30',path:'/carousel',label:'Carousel',load:() => import('./carousel/carousel.js').then(module=>module.default)},
        {id:'31',path:'/checkbox',label:'Checkbox',load:() => import('./checkbox/checkbox.js').then(module=>module.default)},
        // {id:'32',path:'/chip',label:'Chip',load:() => import('./chip/chip.js').then(module=>module.default)},
        // {id:'33',path:'/date-picker',label:'Date Picker',load:() => import('./date-picker/date-picker.js').then(module=>module.default)},
        // {id:'34',path:'/time-picker',label:'Time Picker',load:() => import('./time-picker/time-picker.js').then(module=>module.default)},
        // {id:'35',path:'/dialog',label:'Dialog',load:() => import('./dialog/dialog.js').then(module=>module.default)},
        // {id:'36',path:'/divider',label:'Divider',load:() => import('./divider/divider.js').then(module=>module.default)},
        // {id:'37',path:'/list-item',label:'List Item',load:() => import('./list-item/list-item.js').then(module=>module.default),},
        {id:'38',path:'/list',label:'List',load:() => import('./list/list.js').then(module=>module.default)},
        {id:'39',path:'/list-behavior',label:'List Behavior',load:() => import('./list-behavior/list-behavior.js').then(module=>module.default)},
        {id:'40',path:'/list-interaction',label:'List Interaction',load:() => import('./list-interaction/list-interaction.js').then(module=>module.default)},
        // {id:'41',path:'/tree-item',label:'Tree Item',load:() => import('./tree-item/tree-item.js').then(module=>module.default),},
        {id:'42',path:'/tree',label:'Tree',load:() => import('./tree/tree.js').then(module=>module.default),},
        // {id:'43',path:'/push-menu-item',label:'Push Menu Item',load:() => import('./push-menu-item/push-menu-item.js').then(module=>module.default),},
        {id:'44',path:'/push-menu',label:'Push Menu',load:() => import('./push-menu/push-menu.js').then(module=>module.default),},

        // {id:'45',path:'/loading-indicator',label:'Loading Indicator',load:() => import('./loading-indicator/loading-indicator.js').then(module=>module.default)},
        // {id:'46',path:'/progress-indicator',label:'Progress Indicator',load:() => import('./progress-indicator/progress-indicator.js').then(module=>module.default)},
        // {id:'47',path:'/menu',label:'Menu',load:() => import('./menu/menu.js').then(module=>module.default)},
        // {id:'48',path:'/navigation-bar',label:'Navigation Bar',load:() => import('./navigation-bar/navigation-bar.js').then(module=>module.default)},
        // {id:'49',path:'/navigation-drawer',label:'Navigation Drawer',load:() => import('./navigation-drawer/navigation-drawer.js').then(module=>module.default)},
        // {id:'50',path:'/navigation-rail',label:'Navigation Rail',load:() => import('./navigation-rail/navigation-rail.js').then(module=>module.default)},  
        {id:'51',path:'/radio-button',label:'Radio Button',load:() => import('./radio-button/radio-button.js').then(module=>module.default)},
        // {id:'52',path:'/search',label:'Search',load:() => import('./search/search.js').then(module=>module.default)},
        // {id:'53',path:'/bottom-sheet',label:'Bottom Sheet',load:() => import('./bottom-sheet/bottom-sheet.js').then(module=>module.default)},
        // {id:'54',path:'/side-sheet',label:'Side Sheet',load:() => import('./side-sheet/side-sheet.js').then(module=>module.default)},
        // {id:'55',path:'/slider',label:'Slider',load:() => import('./slider/slider.js').then(module=>module.default)},
        // {id:'56',path:'/snackbar',label:'Snackbar',load:() => import('./snackbar/snackbar.js').then(module=>module.default)},
        {id:'57',path:'/switch',label:'Switch',load:() => import('./switch/switch.js').then(module=>module.default)},
        // {id:'58',path:'/tab',label:'Tab',load:() => import('./tab/tab.js').then(module=>module.default)},
        // {id:'59',path:'/text-field',label:'Text Field',load:() => import('./text-field/text-field.js').then(module=>module.default)},
        // {id:'60',path:'/toolbar',label:'Toolbar',load:() => import('./toolbar/toolbar.js').then(module=>module.default)},
        // {id:'61',path:'/tooltip',label:'Tooltip',load:() => import('./tooltip/tooltip.js').then(module=>module.default)},
    ]},
    {id:'62',path:'*',label:'Not Found',component:testNotFound,redirectTo:'/'},
]

export { routes };
