import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog"
import Contact from "../../Pages/Contact/Contact"

import Home from "../../Pages/Home/Home/Home"
import ProjectA from "../../Pages/Home/Projects/ProjectA"
import ProjectB from "../../Pages/Home/Projects/ProjectB"
import ProjectC from "../../Pages/Home/Projects/ProjectC"
import Projects from "../../Pages/Home/Projects/Projects"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        
        {
            path:'/contactme',
            element: <Contact></Contact>
        },
        {
            path:'/projecta',
            element:<ProjectA></ProjectA>
        },
        {
            path:'/projectb',
            element:<ProjectB></ProjectB>
        },
        {
            path:'/projectc',
            element:<ProjectC></ProjectC>
        },
       
    ]
  }  
])

export default router