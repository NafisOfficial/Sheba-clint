
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Dashbord from "../../Layout/Dashbord/Dashbord";
import Info from "../../Layout/Info/Info";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Profile from "../../Pages/Profile/Profile";
import Home from "../../Pages/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      // Todos: set error page
      children:[{
        path: '/',
        element:<Home/>
      },
        {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
    },
    {
        path: "/dashbord",
        element: <Dashbord/>
    },
    {
      path: "/info",
      element:<Info/>
    }
  ]);