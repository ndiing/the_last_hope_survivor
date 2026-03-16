import testMain from "./main/main.js";
import testNotFound from "./not_found/not_found.js";

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
        {path:'/form',load:()=>import('./form/form.js').then(module=>module.default)},
        {path:'/scrim',load:()=>import('./scrim/scrim.js').then(module=>module.default)},
        {path:'/layout-column',load:()=>import('./layout_column/layout_column.js').then(module=>module.default)},
        {path:'/layout-column-expanded',load:()=>import('./layout_column_expanded/layout_column_expanded.js').then(module=>module.default)},
        {path:'/layout-column-medium',load:()=>import('./layout_column_medium/layout_column_medium.js').then(module=>module.default)},
        {path:'/layout-column-compact',load:()=>import('./layout_column_compact/layout_column_compact.js').then(module=>module.default)},
        {path:'/layout-border',load:()=>import('./layout_border/layout_border.js').then(module=>module.default)},
        {path:'/layout-border-modal',load:()=>import('./layout_border_modal/layout_border_modal.js').then(module=>module.default)},
    ]},
    {path:'*',component:testNotFound},
]

export { routes };
