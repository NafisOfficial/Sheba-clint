
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Dashbord from "../../Layout/Dashbord/Dashbord";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Profile from "../../Pages/Profile/Profile";
import Home from "../../Pages/Home/Home";
import GenericPage from "../../Pages/GenericPage/GenericPage";
import UpdateProfile from "../../Pages/UpdateProfile/UpdateProfile";
import AllMedicine from "../../Pages/AllMedicine/AllMedicine";
import News from "../../Pages/News/News";
import InfoPage from "../../Pages/InfoPage/InfoPage";


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
          .catch((error) => console.log(error))
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