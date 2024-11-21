import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CartDetails = () => {
    return (
        <div>
            <div className='flex gap-3 mx-2 py-2 border-b-[1px] border-gray-400'>
                <div className='border border-gray-300 p-2 rounded'>
                    <img className='w-20 h-full rounded' src="https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D" alt="medicine" />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex justify-between'>
                        <p className="font-bold">Amovet <sup>tablet</sup></p>
                        <p className="font-semibold me-2">100 BDT</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>500 mg</p>
                        <div>|</div>
                        <p>Per unit: 10 BDT</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5'>
                            <div>
                                <select name="" id="">
                                    <option value="">Unit</option>
                                    <option value="">10&apos;s strip</option>
                                    <option value="">100&apos;s box</option>
                                </select>
                            </div>
                            <div className="flex justify-center items-center gap-3 md:gap-5 border border-gray-400 px-2 rounded">
                                <FiMinus className="cursor-pointer" />
                                <p>1</p>
                                <GoPlus className="cursor-pointer" />
                            </div>
                        </div>
                        <button className="flex items-center gap-1 btn btn-sm btn-info"><MdDelete /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;