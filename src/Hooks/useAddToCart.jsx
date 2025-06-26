import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCart from "./useCart";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const useAddToCart = (data) => {
    const { _id,image, form, brand, dose, generic, price_per_unit} = data;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext)
    const [cartPostStatus, setCartPostStatus] = useState("notPosted")
    const [refetch] = useCart();


    const addToCart = () => {
        if (user) {
            const cartObject = { drugId: _id, image, form, brand, dose, generic,quantity: 1,productType: "strip",subTotal: price_per_unit*10, price_per_unit, userEmail: user.email }
            setCartPostStatus("loading")
            fetch('https://sheba-server.vercel.app/carts', {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(cartObject)
            }).then(() => {
                refetch();
                setCartPostStatus("posted")
                toast.success("Added to the cart");
            }).catch(() => {
                setCartPostStatus("notPosted")
                toast.error("Failed to add cart");
            })
        } else {
            navigate('/login', { state: { from: location } });
        }
    }

    const handleCartCurrentStatus=()=>{
            if(cartPostStatus === "notPosted"){
                return <button onClick={addToCart} className="btn btn-sm ms-auto btn-info rounded-full"><IoCartOutline className="text-xl" /></button>
            }
            if(cartPostStatus === "loading"){
                return <div className="btn btn-sm ms-auto btn-info rounded-full"><span className="loading loading-spinner loading-xs"></span></div>
            }
            if(cartPostStatus === "posted"){
                return <button onClick={addToCart} className="btn btn-sm ms-auto btn-info rounded-full"><FaCheck className="text-xl"/></button>
            }
        }

    
    return {handleCartCurrentStatus}
};

export default useAddToCart;