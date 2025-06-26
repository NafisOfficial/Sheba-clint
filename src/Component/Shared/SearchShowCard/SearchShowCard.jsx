import { Link } from "react-router-dom";
import useAddToCart from "../../../Hooks/useAddToCart";


const SearchShowCard = ({ dt }) => {

    const { _id,image, form, brand, dose, generic, price_per_unit } = dt
    const {handleCartCurrentStatus} = useAddToCart(dt)

    
    return (
        <Link to={`/details/${_id}`} className="flex justify-between items-center bg-[#ccc5b7] hover:bg-[#c0b8a8] p-2 rounded">
            <div className="flex gap-2">
                <div className="border border-1 border-[#D6AD60] p-1 rounded-sm">
                    <img src={image} alt={form} className="rounded-xl h-14 w-14" />
                </div>
                <div className="text-left">
                    <p className="text-md font-semibold"><span>{brand}</span> <span>{dose}</span></p>
                    <p>{form}</p>
                    <p>{generic}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-semibold">Strip: {price_per_unit*10} BDT</p>
                <div>
                    {handleCartCurrentStatus()}
                </div>
            </div>
        </Link>
    );
};

export default SearchShowCard;