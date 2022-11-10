import React from "react";
import Main from '../../Layout/Main';
import Blog from "../../Pages/Blog/Blog";
import Home from '../../Pages/Home/Home/Home';
import Login from "../../Pages/Login/Login";
import AllServices from "../../Pages/Services/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Signup from "../../Pages/Signup/Signup";
const { createBrowserRouter } = require("react-router-dom");
const router =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/services',
                element: <AllServices></AllServices>
                
            },
            {
                path:'/blogs',
                element: <Blog></Blog>
                
            },
            {
                path:'/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            }
        ]
    }
])
export default router;