import testMain from "./main/main.js";
import testUsers from "./users/users.js";
import testUser from "./user/user.js";
// import testBlogs from "./blogs/blogs.js"
// import testBlog from "./blog/blog.js"
import testNotFound from "./not_found/not_found.js";

const beforeLoad = (next) => {
    next();
};

/* prettier-ignore */
const routes = [
    {path:'/',component:testMain,children:[
        // {path:'/users',beforeLoad,component:testUsers,children:[
        //     {path:'/:id',component:testUser,outlet:'user',children:[
        //         {path:'/survivor',load:()=>import('./the_last_hope_survivor/the_last_hope_survivor.js').then(module=>module.default)},
        //     ]},
        // ]},
        // {path:'blogs',load:()=>import('./blogs/blogs.js').then(module=>module.default),children:[
        //     {path:'/:id',load:()=>import('./blog/blog.js').then(module=>module.default),children:[
        //         {path:'/survivor',load:()=>import('./the_last_hope_survivor/the_last_hope_survivor.js').then(module=>module.default)},
        //     ]},
        // ]},
        
        {path:'/breakpoint',load:()=>import('./breakpoint/breakpoint.js').then(module=>module.default)},
        {path:'/icon',load:()=>import('./icon/icon.js').then(module=>module.default)},
        {path:'/image',load:()=>import('./image/image.js').then(module=>module.default)},
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
