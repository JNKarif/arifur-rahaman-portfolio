import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog"
import Contact from "../../Pages/Contact/Contact"
import About from "../../Pages/Home/About/About"

import Home from "../../Pages/Home/Home/Home"
import ProjectA from "../../Pages/Home/Projects/ProjectA"
import ProjectB from "../../Pages/Home/Projects/ProjectB"
import ProjectC from "../../Pages/Home/Projects/ProjectC"




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
            path:'/about',
            element:<About></About>
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