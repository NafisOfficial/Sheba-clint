
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Dashbord from "../../Layout/Dashbord/Dashbord";
import Info from "../../Layout/Info/Info";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      // Todos: set error page
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