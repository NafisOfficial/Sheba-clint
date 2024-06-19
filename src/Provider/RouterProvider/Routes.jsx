
import {
  createBrowserRouter,
} from "react-router-dom";
import Dashbord from "../../Layout/Dashbord/Dashbord";
import Main from "../../Layout/Main/Main";
import AllMedicine from "../../Pages/AllMedicine/AllMedicine";
import GenericPage from "../../Pages/GenericPage/GenericPage";
import Home from "../../Pages/Home/Home";
import InfoPage from "../../Pages/InfoPage/InfoPage";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdateProfile from "../../Pages/UpdateProfile/UpdateProfile";
import Carts from "../../Pages/Carts/Carts";
import { toast } from "react-toastify";
import ProivateRoute from "../../Component/Shared/PrivateRoute/ProivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // Todos: set error page
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'signup',
      element: <SignUp />
    },
    {
      path: 'profile',
      element: <Profile />
    },
    {
      path: 'all-medicine',
      element:<AllMedicine/>,
      loader:()=>fetch("http://localhost:3000/drugs/all-drugs")
    },
    {
      path:'update-profile',
      element:<UpdateProfile/>
    },
    {
      path:'/carts',
      element:<ProivateRoute><Carts/></ProivateRoute>
    },
    {
      path:'news',
      element:<News/>
    },
    {
      path: "generic/:name",
      element: <GenericPage />,
      loader: ({ params }) => {
        let name = params.name
        name = name.replace(/:/g,'');
        return fetch(`http://localhost:3000/drugs/category?generic=${name}`)
          .then(res => res.json())
          .then(data => {
            return data;
          })
          .catch(() => toast.error("There was a server side error"))
      }
    },
    {
      path: "/info",
      element: <InfoPage />
    }
    ]
  },
  {
    path: "/dashbord",
    element: <Dashbord />
  }
]);