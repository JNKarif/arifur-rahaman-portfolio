import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Contact from "../../Pages/Contact/Contact"
import Contacts from "../../Pages/Contact/Contacts"
import Home from "../../Pages/Home/Home/Home"


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
            path:'/contactme',
            element: <Contact></Contact>
        },
        {
            path:'/contacts',
            element: <Contacts></Contacts>
        },
    ]
  }  
])

export default router