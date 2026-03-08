import { Router } from "../material/router/router.js";

import testMainComponent from "./main/main.js"
// import testUsersComponent from "./users/users.js"
// import testUserComponent from "./user/user.js"
import testBlogsComponent from "./blogs/blogs.js"
import testBlogComponent from "./blog/blog.js"
import testNotFoundComponent from "./not_found/not_found.js"

const beforeLoad = (next) => {
    next()
}

/* prettier-ignore */
const router=new Router([
    {path:'/',component:testMainComponent,children:[
        {path:'/users',beforeLoad,load:() => import('./users/users.js').then(value=>value.default),children:[
            {path:'/:id',load:() => import('./user/user.js').then(value=>value.default),outlet:'outlet',children:[]},
        ]},
        {path:'/blogs',component:testBlogsComponent,children:[
            {path:'/:id',component:testBlogComponent,children:[]},
        ]},
    ]},
    {path:'*',component:testNotFoundComponent,children:[]},
],{
    historyApiFallback:true
})
router.listen()