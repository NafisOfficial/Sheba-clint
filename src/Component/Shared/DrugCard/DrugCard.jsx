import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCart from "../../../Hooks/useCart";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const DrugCard = ({ data }) => {

    const { _id,image, form, brand, dose, generic, price_per_unit, company_name } = data;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [cartPostStatus, setCartPostStatus] = useState("notPosted")
    const [refetch] = useCart();


    const addToCart = () => {
        if (user) {
            const cartObject = { drugId: _id, image, form, brand, dose, generic, price_per_unit, userEmail: user.email }
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


    return (
        <div>
            <div className="card w-auto bg-white shadow-xl">
                <figure>
                    <img src={image} alt={form} className="rounded-xl md:h-32 md:w-full h-20" />
                </figure>
                <div className="md:px-5 px-3 items-left ">
                    <div className="h-22 md:h-44">
                        <h2 className="card-title text-lg md:text-2xl">{brand}<sub className='text-sm my-2'>{dose}</sub></h2>
                        <div>
                            <p className="text-sm md:text-base"><span className="font-bold">Form:</span> {form}</p>
                            <p className="text-sm md:text-base"><span className="font-bold">Generic:</span> {generic}</p>
                            <p className="text-sm md:text-base"><span className="font-bold">Price per unit:</span> {price_per_unit} BDT</p>
                            <p className="text-sm md:text-base"><span className="font-bold">Company:</span> {company_name}</p>
                        </div>
                    </div>
                    <div className="card-actions mt-2 mb-3 md:mb-5">
                        <button className="btn btn-sm btn-info rounded-full text-white"><Link to={`/details/${_id}`}>Details</Link></button>
                        {handleCartCurrentStatus()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrugCard;