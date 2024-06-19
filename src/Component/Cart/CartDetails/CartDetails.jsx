import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const CartDetails = ({ data, refetch }) => {


    const handlePlus = () => {

    }

    const handleMinus = () => {

    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/carts/singleCart?email=${data?.userEmail}&&id=${data?._id}`,{
            method: "DELETE"
        })
        .then(()=>{
            refetch();
        })
        .catch(()=>{
            toast.error("There is a server side error");
        })
    }

    const noItem = <td>No item available in cart</td>


    return (
        <tr>
            {data.length>0 ? <>
                <td><div>
                    <p className='font-bold'>{data?.brand}</p>
                    <p>{data?.form}</p>
                    <p>{data?.dose}</p>
                </div></td>
                <td>{data?.price_per_unit} BDT</td>
                <td><div className="flex gap-3 items-center">
                    <p><FaMinus className="cursor-pointer" onClick={handleMinus} /></p>
                    <p>1</p>
                    <p><FaPlus className="cursor-pointer" onClick={handlePlus} /></p>
                </div></td>
                <td>{5 * data?.price_per_unit} BDT</td>
                <td><MdDelete className="text-lg cursor-pointer" onClick={handleDelete} /></td>
            </> : noItem}
        </tr>
    );
};

export default CartDetails;