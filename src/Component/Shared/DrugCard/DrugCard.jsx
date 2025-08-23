import { Link, useLocation } from "react-router-dom";
import useAddToCart from "../../../Hooks/useAddToCart";

const DrugCard = ({ data }) => {
    // destructuring card data object
    const { _id,image, form, brand, dose, generic, price_per_unit, company_name } = data;
    //getting different button according to cart status
    const {handleCartCurrentStatus} = useAddToCart(data);
    const location = useLocation();

    return (
        <div>
            <div className="card w-auto bg-white shadow-xl">
                {/* card image  */}
                <figure>
                    <img src={image} alt={form} className="rounded-xl md:h-32 md:w-full h-20" />
                </figure>
                {/* card body  */}
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
                    {/* card functional button  */}
                    <div className="card-actions mt-2 mb-3 md:mb-5">
                        {location.pathname === "/dashboard/manage-products"?<Link className="btn btn-sm btn-info rounded-full text-white" to={`/dashboard/details/${_id}`}>Details</Link>:<Link className="btn btn-sm btn-info rounded-full text-white" to={`/details/${_id}`}>Details</Link>}
                        {/* showing conditional add to card button  */}
                        {handleCartCurrentStatus()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrugCard;