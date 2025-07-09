import { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCart from "../../Hooks/useCart";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const DrugDetails = () => {
    const [cartPostStatus, setCartPostStatus] = useState("notPosted");
    const [editAble, setEditAble] = useState(false);
    const drug = useLoaderData();
    const { user } = useContext(AuthContext);
    const [refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const { _id, form, image, brand, dose, generic, price_per_unit, indications, interaction, mode_of_action, precautions_and_warnings, pregnancy_and_lactation, side_effects } = drug;


    const addToCart = () => {
        if (user) {
            const cartObject = { drugId: _id, image, form, brand, dose, generic, quantity: 1, productType: "strip", subTotal: price_per_unit*10, price_per_unit, userEmail: user.email }
            setCartPostStatus("loading")
            fetch('http://localhost:3000/carts', {
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

    useEffect(()=>{
        if(_id && location?.pathname === `/dashboard/details/${_id}`){
             setEditAble(true)
        }
    },[_id,location])

    const handleUpdate =()=>{

    }

 

    const handleCartCurrentStatus = () => {
        if(editAble){
             return <button onClick={handleUpdate} className="btn btn-sm ms-auto btn-info rounded-full">Update</button>
        }
        if (cartPostStatus === "notPosted") {
            return <button onClick={addToCart} className="btn btn-sm ms-auto btn-info rounded-full"><IoCartOutline className="text-xl" /></button>
        }
        if (cartPostStatus === "loading") {
            return <div className="btn btn-sm ms-auto btn-info rounded-full"><span className="loading loading-spinner loading-xs"></span></div>
        }
        if (cartPostStatus === "posted") {
            return <button className="btn btn-sm ms-auto btn-info rounded-full"><FaCheck className="text-xl" /></button>
        }
    }
    return (
        <div className="w-full mx-3 md:mx-auto md:w-5/6">
            <div className="border-2 w-80 mx-auto md:w-full border-gray-300 py-2 md:p-5 rounded  mt-10">
                <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
                    <div>
                        <img className='w-60 h-full rounded' src={image} alt="medicine" />
                    </div>
                    <div >
                        <div className="flex flex-col gap-2">
                            <p className="font-bold">{drug?.brand}<sup className="ms-2">{drug?.dose}</sup></p>
                            <p>Form: {drug?.form}</p>
                            <p>Generic: {drug?.generic}</p>
                            <p>Company: {drug?.company_name}</p>
                            <div className="flex items-center justify-between">
                                <p>Per unit {drug?.price_per_unit}: BDT</p>
                                {handleCartCurrentStatus()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="text-xl font-bold mt-5">Drug Information:</h1>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                    <div className="collapse-title text-xl font-medium">Indication of the drug</div>
                    <div className="collapse-content">
                        <p>{indications}</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                    <div className="collapse-title text-xl font-medium">Mode action of the drug</div>
                    <div className="collapse-content">
                        <p>{mode_of_action}</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                    <div className="collapse-title text-xl font-medium">Side effects of the drug</div>
                    <div className="collapse-content">
                        <p>{side_effects}</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                    <div className="collapse-title text-xl font-medium">Precautions and warnings</div>
                    <div className="collapse-content">
                        <p>{precautions_and_warnings}</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                    <div className="collapse-title text-xl font-medium">Caution for pregnant patient</div>
                    <div className="collapse-content">
                        <p>{pregnancy_and_lactation}</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
                    <div className="collapse-title text-xl font-medium">Interaction with others</div>
                    <div className="collapse-content">
                        <p>{interaction}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrugDetails;