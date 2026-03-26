import testMain from "./main/main.js";
import testNotFound from "./not-found/not-found.js";

/* prettier-ignore */
const routes = [
    {path:'/',component:testMain,children:[
        {path:'/dev',load:()=>import('./dev/dev.js').then(module=>module.default)},
        {path:'/breakpoint',load:()=>import('./breakpoint/breakpoint.js').then(module=>module.default)},
        // {path:'/ripple',load:()=>import('./ripple/ripple.js').then(module=>module.default)},
        {path:'/icon',load:()=>import('./icon/icon.js').then(module=>module.default)},
        {path:'/icon-button',load:()=>import('./icon-button/icon-button.js').then(module=>module.default)},
        {path:'/image',load:()=>import('./image/image.js').then(module=>module.default)},
        {path:'/button',load:()=>import('./button/button.js').then(module=>module.default)},
        {path:'/checkbox',load:()=>import('./checkbox/checkbox.js').then(module=>module.default)},
        {path:'/radio-button',load:()=>import('./radio-button/radio-button.js').then(module=>module.default)},
        {path:'/switch',load:()=>import('./switch/switch.js').then(module=>module.default)},
        {path:'/avatar',load:()=>import('./avatar/avatar.js').then(module=>module.default)},
        {path:'/text-field',load:()=>import('./text-field/text-field.js').then(module=>module.default)},
        {path:'/text-field-round',load:()=>import('./text-field-round/text-field-round.js').then(module=>module.default)},
        {path:'/form',load:()=>import('./form/form.js').then(module=>module.default)},
        {path:'/scrim',load:()=>import('./scrim/scrim.js').then(module=>module.default)},
        {path:'/layout-column',load:()=>import('./layout-column/layout-column.js').then(module=>module.default)},
        {path:'/layout-column-expanded',load:()=>import('./layout-column-expanded/layout-column-expanded.js').then(module=>module.default)},
        {path:'/layout-column-medium',load:()=>import('./layout-column-medium/layout-column-medium.js').then(module=>module.default)},
        {path:'/layout-column-compact',load:()=>import('./layout-column-compact/layout-column-compact.js').then(module=>module.default)},
        {path:'/layout-border',load:()=>import('./layout-border/layout-border.js').then(module=>module.default)},
        {path:'/layout-border-modal',load:()=>import('./layout-border-modal/layout-border-modal.js').then(module=>module.default)},
    ]},
    {path:'*',component:testNotFound,redirectTo:'/'},
]

export { routes };
