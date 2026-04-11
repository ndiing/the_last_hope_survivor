import { Router } from "../material/router/router.js";
import testMain from "./main/main.js";
import testNotFound from "./not-found/not-found.js";

/* prettier-ignore */
const routes = [
    {path:'/',component:testMain,children:[
        {path:'/ripple',load:() => import('./ripple/ripple.js').then(module=>module.default),},
        {path:'/breakpoint',load:() => import('./breakpoint/breakpoint.js').then(module=>module.default),},      
        {path:'/color',load:() => import('./color/color.js').then(module=>module.default),},      
        {path:'/virtual-scroll',load:() => import('./virtual-scroll/virtual-scroll.js').then(module=>module.default),},

        // {path:'/layout',load:() => import('./layout/layout.js').then(module=>module.default),},
        // {path:'/layout-header',load:() => import('./layout-header/layout-header.js').then(module=>module.default),},
        // {path:'/layout-body',load:() => import('./layout-body/layout-body.js').then(module=>module.default),},
        // {path:'/layout-footer',load:() => import('./layout-footer/layout-footer.js').then(module=>module.default),},

        {path:'/scrim',load:() => import('./scrim/scrim.js').then(module=>module.default)},
        {path:'/layout-column',load:() => import('./layout-column/layout-column.js').then(module=>module.default)},
        {path:'/layout-column-expanded',load:() => import('./layout-column-expanded/layout-column-expanded.js').then(module=>module.default)},
        {path:'/layout-column-medium',load:() => import('./layout-column-medium/layout-column-medium.js').then(module=>module.default)},
        {path:'/layout-column-compact',load:() => import('./layout-column-compact/layout-column-compact.js').then(module=>module.default)},
        {path:'/layout-border',load:() => import('./layout-border/layout-border.js').then(module=>module.default)},
        {path:'/layout-border-modal',load:() => import('./layout-border-modal/layout-border-modal.js').then(module=>module.default)},
        
        {path:'/icon',load:() => import('./icon/icon.js').then(module=>module.default)},
        {path:'/emoji',load:() => import('./emoji/emoji.js').then(module=>module.default)},
        {path:'/image',load:() => import('./image/image.js').then(module=>module.default)},
        {path:'/avatar',load:() => import('./avatar/avatar.js').then(module=>module.default)},
        {path:'/text',load:() => import('./text/text.js').then(module=>module.default),},

        {path:'/form',load:() => import('./form/form.js').then(module=>module.default),},

        {path:'/tool-group',load:() => import('./tool-group/tool-group.js').then(module=>module.default),},      

        {path:'/app-bar',load:() => import('./app-bar/app-bar.js').then(module=>module.default)},
        {path:'/badge',load:() => import('./badge/badge.js').then(module=>module.default)},
        {path:'/button-group',load:() => import('./button-group/button-group.js').then(module=>module.default)},
        {path:'/button',load:() => import('./button/button.js').then(module=>module.default)},
        {path:'/extended-fab',load:() => import('./extended-fab/extended-fab.js').then(module=>module.default)},
        {path:'/fab-menu',load:() => import('./fab-menu/fab-menu.js').then(module=>module.default)},
        {path:'/fab',load:() => import('./fab/fab.js').then(module=>module.default)},
        {path:'/icon-button',load:() => import('./icon-button/icon-button.js').then(module=>module.default)},
        {path:'/segmented-button',load:() => import('./segmented-button/segmented-button.js').then(module=>module.default)},
        {path:'/split-button',load:() => import('./split-button/split-button.js').then(module=>module.default)},
        {path:'/card',load:() => import('./card/card.js').then(module=>module.default)},
        {path:'/carousel',load:() => import('./carousel/carousel.js').then(module=>module.default)},
        {path:'/checkbox',load:() => import('./checkbox/checkbox.js').then(module=>module.default)},
        {path:'/chip',load:() => import('./chip/chip.js').then(module=>module.default)},
        {path:'/date-picker',load:() => import('./date-picker/date-picker.js').then(module=>module.default)},
        {path:'/time-picker',load:() => import('./time-picker/time-picker.js').then(module=>module.default)},
        {path:'/dialog',load:() => import('./dialog/dialog.js').then(module=>module.default)},
        {path:'/divider',load:() => import('./divider/divider.js').then(module=>module.default)},

        {path:'/list',load:() => import('./list/list.js').then(module=>module.default)},
        {path:'/list-behavior',load:() => import('./list-behavior/list-behavior.js').then(module=>module.default)},
        {path:'/list-interaction',load:() => import('./list-interaction/list-interaction.js').then(module=>module.default)},

        {path:'/tree',load:() => import('./tree/tree.js').then(module=>module.default),},
        {path:'/push-menu',load:() => import('./push-menu/push-menu.js').then(module=>module.default),},

        {path:'/loading-indicator',load:() => import('./loading-indicator/loading-indicator.js').then(module=>module.default)},
        {path:'/progress-indicator',load:() => import('./progress-indicator/progress-indicator.js').then(module=>module.default)},
        {path:'/menu',load:() => import('./menu/menu.js').then(module=>module.default)},

        {path:'/navigation-bar',load:() => import('./navigation-bar/navigation-bar.js').then(module=>module.default)},
        // {path:'/navigation-bar-vertical',load:() => import('./navigation-bar/navigation-bar-vertical.js').then(module=>module.default)},
        {path:'/navigation-bar-vertical-badge',load:() => import('./navigation-bar/navigation-bar-vertical-badge.js').then(module=>module.default)},
        {path:'/navigation-bar-horizontal',load:() => import('./navigation-bar/navigation-bar-horizontal.js').then(module=>module.default)},
        {path:'/navigation-bar-horizontal-badge',load:() => import('./navigation-bar/navigation-bar-horizontal-badge.js').then(module=>module.default)},
        
        // {path:'/navigation-drawer',load:() => import('./navigation-drawer/navigation-drawer.js').then(module=>module.default)},
        {path:'/navigation-drawer-nested-list-modal',load:() => import('./navigation-drawer/navigation-drawer-nested-list-modal.js').then(module=>module.default)},
        {path:'/navigation-drawer-nested-list',load:() => import('./navigation-drawer/navigation-drawer-nested-list.js').then(module=>module.default)},
        {path:'/navigation-drawer-flat-list',load:() => import('./navigation-drawer/navigation-drawer-flat-list.js').then(module=>module.default)},
        {path:'/navigation-drawer-nested-tree',load:() => import('./navigation-drawer/navigation-drawer-nested-tree.js').then(module=>module.default)},
        {path:'/navigation-drawer-flat-tree',load:() => import('./navigation-drawer/navigation-drawer-flat-tree.js').then(module=>module.default)},
        {path:'/navigation-drawer-nested-push-menu',load:() => import('./navigation-drawer/navigation-drawer-nested-push-menu.js').then(module=>module.default)},
        {path:'/navigation-drawer-flat-push-menu',load:() => import('./navigation-drawer/navigation-drawer-flat-push-menu.js').then(module=>module.default)},

        {path:'/navigation-rail',load:() => import('./navigation-rail/navigation-rail.js').then(module=>module.default)},  
        {path:'/navigation-rail-with-icon-and-fab',load:() => import('./navigation-rail/navigation-rail-with-icon-and-fab.js').then(module=>module.default)},  
        {path:'/navigation-rail-with-fab',load:() => import('./navigation-rail/navigation-rail-with-fab.js').then(module=>module.default)},  
        {path:'/navigation-rail-with-icon',load:() => import('./navigation-rail/navigation-rail-with-icon.js').then(module=>module.default)},  

        {path:'/radio-button',load:() => import('./radio-button/radio-button.js').then(module=>module.default)},
        {path:'/search',load:() => import('./search/search.js').then(module=>module.default)},
        {path:'/bottom-sheet',load:() => import('./bottom-sheet/bottom-sheet.js').then(module=>module.default)},
        {path:'/side-sheet',load:() => import('./side-sheet/side-sheet.js').then(module=>module.default)},
        {path:'/slider',load:() => import('./slider/slider.js').then(module=>module.default)},
        {path:'/snackbar',load:() => import('./snackbar/snackbar.js').then(module=>module.default)},
        {path:'/switch',load:() => import('./switch/switch.js').then(module=>module.default)},
        {path:'/tab',load:() => import('./tab/tab.js').then(module=>module.default)},
        {path:'/text-field',load:() => import('./text-field/text-field.js').then(module=>module.default)},
        {path:'/toolbar',load:() => import('./toolbar/toolbar.js').then(module=>module.default)},
        {path:'/tooltip',load:() => import('./tooltip/tooltip.js').then(module=>module.default)},

        {path:'/test',load:() => import('./test/test.js').then(module=>module.default),},

    ]},
    {path:'*',component:testNotFound,redirectTo:'/'},
]

document.body.style.setProperty("--md-comp-font-not-ready", "hidden");
document.fonts.ready.then(() => {
    document.body.style.removeProperty("--md-comp-font-not-ready");
});

const router = new Router(routes, {
    // historyApiFallback: true,
});

router.listen();

export { router };
