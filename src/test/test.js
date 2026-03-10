import { Router } from "../material/router/router.js"
import testMain from "./main/main.js"
import testUsers from "./users/users.js"
import testUser from "./user/user.js"
// import testBlogs from "./blogs/blogs.js"
// import testBlog from "./blog/blog.js"
import testNotFound from "./not_found/not_found.js"

const beforeLoad = (next) => {
    next()
}

/* prettier-ignore */
const routes = [
    {path:'/',component:testMain,children:[
        {path:'/users',beforeLoad,component:testUsers,children:[
            {path:'/:id',component:testUser,outlet:'user',children:[
                {path:'/survivor',load:()=>import('./the_last_hope_survivor/the_last_hope_survivor.js').then(module=>module.default)},
            ]},
        ]},
        {path:'blogs',load:()=>import('./blogs/blogs.js').then(module=>module.default),children:[
            {path:'/:id',load:()=>import('./blog/blog.js').then(module=>module.default),children:[
                {path:'/survivor',load:()=>import('./the_last_hope_survivor/the_last_hope_survivor.js').then(module=>module.default)},
            ]},
        ]},
    ]},
    {path:'*',component:testNotFound},
]
const router = new Router(routes,{historyApiFallback:true})
router.listen()