
import {
  createBrowserRouter,
} from "react-router-dom";
import { toast } from "react-toastify";
import CheckAdmin from "../../Component/Shared/CheckAdmin/CheckAdmin";
import PrivateRoute from "../../Component/Shared/PrivateRoute/PrivateRoute";
import Dashbord from "../../Layout/Dashbord/Dashbord";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllMedicine from "../../Pages/AllMedicine/AllMedicine";
import Carts from "../../Pages/Carts/Carts";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import DrugDetails from "../../Pages/DrugDetails/DrugDetails";
import OrderHistory from "../../Pages/History/OrderHistory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ManageOrder from "../../Pages/ManageOrder/ManageOrder";
import ManageProducts from "../../Pages/ManageProducts/ManageProducts";
import ManageUser from "../../Pages/ManageUser/ManageUser";
import News from "../../Pages/News/News";
import Payment from "../../Pages/Payment/Payment";
import Profile from "../../Pages/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import SuccessTr from "../../Pages/SuccessTr/SuccessTr";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";
import UpdateProfile from "../../Pages/UpdateProfile/UpdateProfile";


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
      element: <PrivateRoute><Profile /></PrivateRoute>
    },
    {
      path: 'all-medicine',
      element:<AllMedicine/>,
      loader:()=>fetch("https://sheba-server.vercel.app/drugs/all-drugs")
    },
    {
      path:'update-profile',
      element:<PrivateRoute><UpdateProfile/></PrivateRoute>
    },
    {
      path:'/carts',
      element:<PrivateRoute><Carts/></PrivateRoute>
    },
    {
      path:'/carts/payment',
      element:<PrivateRoute><Payment/></PrivateRoute>
    },
    {
      path:'/carts/checkout',
      element:<PrivateRoute><CheckOut/></PrivateRoute>
    },
    {
      path:"/payment-success",
      element:<SuccessTr/>
    },
    {
      path:"/history",
      element:<OrderHistory/>
    },
    {
      path:'news',
      element:<News/>
    },
    {
      path:"details/:_id",
      element:<DrugDetails/>,
      loader:({params})=>{
        const drugId = params._id;
        return fetch(`https://sheba-server.vercel.app/drugs/single-drug/${drugId}`)
                .then(res=>res.json())
                .then(drug=>{
                  return drug.data
                })
                .catch(()=>toast.error("Failed to get drug"))
      }
    }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashbord />,
    children:[{
      path: "/dashboard/manage-users",
      element:<CheckAdmin><ManageUser/></CheckAdmin>
    },
    {
      path:"/dashboard/manage-products",
      element:<CheckAdmin><ManageProducts/></CheckAdmin>
    },
    {
      path: "/dashboard/add-products",
      element:<CheckAdmin><AddProduct/></CheckAdmin>
    },
    {
      path: "/dashboard/product/update/:id",
      element:<CheckAdmin><UpdateProduct/></CheckAdmin>,
      loader: ({params})=>{
        const {id} = params;
        return fetch(`https://sheba-server.vercel.app/drugs/single-drug/${id}`)
        .then(res=>res.json())
        .then((singleDrug)=>{
          return singleDrug.data
        })
        .catch(()=>toast.error("Failed to get drug"))
      }
    },
    {
      path:"/dashboard/details/:_id",
      element:<CheckAdmin><DrugDetails/></CheckAdmin>,
      loader:({params})=>{
        const drugId = params._id;
        return fetch(`https://sheba-server.vercel.app/drugs/single-drug/${drugId}`)
                .then(res=>res.json())
                .then(drug=>{
                  return drug.data
                })
                .catch(()=>toast.error("Failed to get drug"))
      }
    },
    {
      path: "/dashboard/manage-orders",
      element:<CheckAdmin><ManageOrder/></CheckAdmin>
    }
  ]
  }
]);