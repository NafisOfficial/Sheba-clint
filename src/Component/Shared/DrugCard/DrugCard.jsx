import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { AuthContex } from "../../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCart from "../../../Hooks/useCart";

const DrugCard = ({ data, offer }) => {

    const { _id, form, brand, dose, generic, price_per_unit, company_name } = data;
    const { user } = useContext(AuthContex)
    const navigate = useNavigate();
    const location = useLocation();
    const [refetch] = useCart();


    if (data?.form === "tablet") {
        data.drugImg = "https://i.ibb.co/JQ8tMXX/tablets2.png"
    } else if (data?.form === "capsule") {
        data.drugImg = "https://i.ibb.co/rmR7nyV/capsules3.png"
    }

    const addToCart = () => {

        if (user) {
            const cartObject = { drugId: _id, drugImg: data.drugImg, form, brand, dose, generic, price_per_unit, userEmail: user.email }
            fetch('http://localhost:3000/carts', {
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(cartObject)
            }).then(() => {
                refetch();
                toast.success("Added to the cart");
            }).catch(() => {
                toast.error("Failed to add cart");
            })
        } else {
            navigate('/login', { state: { from: location } });
        }
    }

    return (
        <div>
            <div className="card w-auto bg-white shadow-xl">
                <figure>
                    <img src={data.drugImg} alt={form} className="rounded-xl md:h-32 md:w-32 h-20 w-20" />
                </figure>
                <div className="md:px-5 px-3 items-left ">
                    <div className="h-22 md:h-44">
                        <h2 className="card-title text-lg md:text-2xl">{brand}<sub className='text-sm my-2'>{dose}</sub></h2>
                        <div>
                            <p className="text-sm md:text-base"><span className="font-bold">Form:</span> {form}</p>
                            <p className="text-sm md:text-base"><span className="font-bold">Generic:</span> {generic}</p>
                            <p className="text-sm md:text-base"><span className="font-bold">Price per unit:</span> {price_per_unit} BDT</p>
                            <p className="text-sm md:text-base"><span className="font-bold">Manufaturer:</span> {company_name}</p>
                        </div>
                    </div>
                    <div className="card-actions mb-5">
                        {offer?.isOffered && <p className="text-blue-700 text-sm">{offer?.details}</p>}
                        <button onClick={addToCart} className="btn btn-sm ms-auto btn-info rounded-full"><IoCartOutline className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrugCard;