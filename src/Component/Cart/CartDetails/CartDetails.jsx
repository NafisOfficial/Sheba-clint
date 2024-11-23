import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const CartDetails = ({data,object,index}) => {

    const {_id,image,brand,form,dose,price_per_unit} = data;
    const {refetch,upDateData} = object;
    //getting user data
    const { user } = useContext(AuthContext);
    //getting cart data
    const [amount, setAmount] = useState(1);
    const [totalPrice,setTotalPrice] = useState(price_per_unit*10);
    const [productType,setProductType] = useState("strip")


    const handleDelete = (_id) => {
        if (user) {
            fetch(`https://sheba-server.vercel.app/carts/delete/singleCart?email=${user?.email}&&id=${_id}`, {
                method: "DELETE"
            })
                .then(() => {
                    refetch();
                    toast.success("Deleted");
                })
                .catch(() => {
                    toast.error("Failed to delete cart");
                })
        } else {
            toast.error("Failed to delete cart");
        }
    }

    const handlePlus = () => {

        setAmount((prevAmount) => {
            let newAmount = prevAmount + 1;
            return newAmount;
        },_id)

    }


    const handleMinus = () => {
        if (amount > 1) {
            setAmount((prevAmount) => {
                let newAmount;
                newAmount = prevAmount - 1;
                return newAmount;
            },_id)
        }
    }

    const handleSelect=(event)=>{
        setProductType(event.target.value);
    }

    useEffect(()=>{
        if(productType==="strip"){
            let total = 10*price_per_unit*amount
            setTotalPrice(total)

        }else if(productType==="box"){
            let total = 100*price_per_unit*amount
            setTotalPrice(total)
        }else if(productType==="unit"){
            let total = price_per_unit*amount
            setTotalPrice(total)
        }
        upDateData(index,amount,productType,totalPrice)
    },[amount,productType,totalPrice,index,price_per_unit,upDateData])




    return (
        <div>
            <div className='flex gap-3 mx-2 py-2 border-b-[1px] border-gray-400'>
                <div className='border border-gray-300 p-2 rounded'>
                    <img className='w-20 h-full rounded' src={image} alt={brand} />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex justify-between'>
                        <p className="font-bold">{brand} <sup>{form}</sup></p>
                        <p className="font-semibold me-2">{totalPrice} BDT</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>{dose}</p>
                        <div>|</div>
                        <p>Per unit: {price_per_unit} BDT</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5'>
                            <div>
                                <select onChange={handleSelect} name="parseType" className="focus:outline-none" id="">
                                    <option value="strip">10&apos;s strip</option>
                                    <option value="box">100&apos;s box</option>
                                    <option value="unit">1&apos; unit</option>
                                </select>
                            </div>
                            <div className="flex justify-center items-center gap-3 md:gap-5 border border-gray-400 px-2 rounded">
                                <FiMinus onClick={() => handleMinus(_id)} className="cursor-pointer" />
                                <p>{amount}</p>
                                <GoPlus onClick={() => handlePlus(_id)} className="cursor-pointer" />
                            </div>
                        </div>
                        <button onClick={()=>handleDelete(_id)} className="flex items-center gap-1 btn btn-sm btn-info"><MdDelete /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;