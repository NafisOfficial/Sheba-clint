import { useState } from "react";
import CartDetails from "../../Component/Cart/CartDetails/CartDetails";
import useCart from "../../Hooks/useCart";




const Carts = () => {
    const [refetch, datas] = useCart();
    const [valueTotal, setValueTotal] = useState(0)
    const [cart, setCart] = useState(datas)


    const upDateData = (index, newQuantity, newProductType, newSubTotal) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity = newQuantity;
            updatedCart[index].productType = newProductType;
            updatedCart[index].subTotal = newSubTotal;
            return updatedCart;
        });

        const sum = cart.reduce((a, c) => {
            return a.subTotal + c.subTotal;
        });
        setValueTotal(sum);
    };


    const object = { refetch, upDateData }

    return (
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8 mx-2 md:mx-5 my-3">
            <div className="md:flex-1">
                <div className="mx-2 border-b-[1px] border-gray-400 text-xl font-semibold">Cart</div>
                {datas?.map((data, index) => <CartDetails key={index} index={index} data={data} object={object} />)}
            </div>
            <div className="flex flex-col bg-white p-3 rounded gap-2 my-5 py-5">
                <p className="text-xl font-bold">Delivery</p>
                <div className="flex items-center justify-between">
                    <p>Date:</p>
                    <p>{new Date().toDateString()}</p>
                </div>
                <div className="flex bg-white gap-1">
                    <input type="text" className="rounded input input-bordered bg-transparent" name="" id="" placeholder="Promocode" />
                    <button className="btn bg-white">Apply</button>
                </div>
                <p className="border border-dashed"></p>
                <div className="flex justify-between items-center">
                    <p>Subtotal</p><p>{valueTotal.toFixed(2)} BDT</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Delivery</p><p>150 BDT</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Tax</p><p>0.00 BDT</p>
                </div>
                <p className="border border-dashed"></p>
                <div className="flex justify-between items-center">
                    <p>Total</p>
                    <p>{(valueTotal + 150).toFixed(2)} BDT</p>
                </div>
                <button className="btn btn-info">Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Carts;