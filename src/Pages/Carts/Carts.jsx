import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import CartDetails from '../../Component/Cart/CartDetails/CartDetails';
import useCart from '../../Hooks/useCart';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Carts = () => {
    const { user } = useContext(AuthContext);
    const [refetch, datas] = useCart();
    const [totalSum,setTotalSum] = useState(()=>{
        const total = datas?.reduce((pre,sum)=>{
            return pre + sum?.price_per_unit
        },0)

        return total
    })


    const object = {refetch,totalSum,setTotalSum}


    const handleDeleteAll =async()=>{
        if(user){
            fetch(`https://sheba-server.vercel.app/carts/delete/all?email=${user?.email}`,{
                method: "DELETE"
            })
        .then(()=>{
            toast.success("Deleted all cats")
            refetch()
        })
        .catch(()=>{
            toast.error("Failed to delete1");
        })
        }else{
            toast.error("Failed to delete2");
        }
    }


    const noData = <tr className='h-lvh'>
        no data available
    </tr>


    return (
        <div>
            {datas ? <div className='m-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas?.map(data => <CartDetails key={data?._id} data={data} object={object} />)}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='ps-1 font-semibold' colSpan={2}>
                                <div className='flex flex-col gap-2  pb-2 border-b-2 border-gray-400'>
                                    <p>Sum of total: {totalSum.toFixed(2)} BDT</p>
                                    <p>Shipping fee: 150 BDT</p>
                                </div>
                                <p >Total cost: {(totalSum + 150).toFixed(2)} BDT</p>
                            </td>

                        </tr>
                    </tbody>
                </table>
                <div className='flex justify-between mt-5'>
                    <button onClick={handleDeleteAll} className="btn btn-active btn-sm btn-info">Delete all</button>
                    <button className="btn btn-active btn-sm btn-info md:me-44 me-0">Goto Pay</button>
                </div>
            </div> : noData}
        </div>
    );
};

export default Carts;