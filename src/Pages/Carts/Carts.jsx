import CartDetails from "../../Component/Cart/CartDetails/CartDetails";
import Delivary from "../../Component/Cart/Delivary/Delivary";
import useCart from "../../Hooks/useCart";




const Carts = () => {

    const [refetch, datas] = useCart();

    return (
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8 mx-2 md:mx-5 my-3">
            <div className="md:flex-1">
                <div className="mx-2 border-b-[1px] border-gray-400 text-xl font-semibold">Cart</div>
                {datas.map((data, index) => <CartDetails key={index} data={data} refetch={refetch}/>)}
            </div>
            <Delivary />
        </div>
    );
};

export default Carts;