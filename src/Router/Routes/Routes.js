import React from "react";
import Main from '../../Layout/Main';
import Blog from "../../Pages/Blog/Blog";
import Home from '../../Pages/Home/Home/Home';
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import AddService from "../../Pages/Services/AddService";
import AllServices from "../../Pages/Services/AllServices";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes'
import MyReview from "../../Pages/Review/MyReview";
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
                path:'/addServices',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
                
            },
            {
                path:'/reviews',
                element: <PrivateRoutes><Review></Review> </PrivateRoutes>               
            },
            {
                path:'/myReview',
                element: <MyReview></MyReview>,
                loader:({params})=>fetch(`https://consaltent-review-server.vercel.app/reviews/${params.id}`)               
            },
            {
                path:'/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://consaltent-review-server.vercel.app/services/${params.id}`)
                
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