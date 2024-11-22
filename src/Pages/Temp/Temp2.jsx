import { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const CartDetails = ({ data, object }) => {

    const [amount, setAmount] = useState(1);
    const { refetch, totalSum, setTotalSum } = object;


    const handlePlus = () => {

        setAmount((prevAmount) => {
            let newAmount = prevAmount + 1;
            setTotalSum(() => {
                let newSum = totalSum + data.price_per_unit;
                return newSum;
            });
            return newAmount;
        })

    }

    const handleMinus = () => {
        if (amount > 1) {
            setAmount((prevAmount) => {
                let newAmount;
                newAmount = prevAmount - 1;
                setTotalSum(() => {
                    let newSum = totalSum - data.price_per_unit;
                    return newSum;
                });
                return newAmount;
            })
        }
    }



    const handleDelete = (id) => {
        if (user) {
            fetch(`https://sheba-server.vercel.app/carts/delete/singleCart?email=${user?.email}&&id=${id}`, {
                method: "DELETE"
            })
                .then(() => {
                    refetch();
                })
                .catch(() => {
                    toast.error("Failed to delete cart");
                })
        } else {
            toast.error("Failed to delete cart");
        }
    }



    return (
        <tr>
            <td><div>
                <p className='font-bold'>{data?.brand}</p>
                <p>{data?.form}</p>
                <p>{data?.dose}</p>
            </div></td>
            <td>{data?.price_per_unit} BDT</td>
            <td><div className="flex gap-3 items-center">
                <p><FaMinus className="cursor-pointer" onClick={() => handleMinus(data._id)} /></p>
                <p>{amount}</p>
                <p><FaPlus className="cursor-pointer" onClick={() => handlePlus(data._id)} /></p>
            </div></td>
            <td>{(amount * data?.price_per_unit).toFixed(2)} BDT</td>
            <td><MdDelete className="text-lg cursor-pointer" onClick={() => handleDelete(data._id)} /></td>
        </tr>
    );
};

export default CartDetails;