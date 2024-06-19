import useCart from '../../Hooks/useCart';
import CartDetails from '../../Component/Cart/CartDetails/CartDetails';

const Carts = () => {
    const [refetch,datas] = useCart()
    return (
        <div>
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
                    {datas?.map(data=><CartDetails key={data?._id} data={data} refetch={refetch}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default Carts;