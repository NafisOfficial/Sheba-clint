
const Delivary = () => {
    return (
        <div className="flex flex-col bg-white p-3 rounded gap-2 my-5 py-5">
            <p className="text-xl font-bold">Delivery</p>
            <p>Date:</p>
            <div className="flex bg-white gap-1">
                <input type="text" className="rounded input input-bordered bg-transparent" name="" id="" placeholder="Promocode" />
                <button className="btn bg-white">Apply</button>
            </div>
            <p className="border border-dashed"></p>
            <div className="flex justify-between items-center">
                <p>Subtotal</p><p>500.00 BDT</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Delivery</p><p>150.00 BDT</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Tax</p><p>0.00 BDT</p>
            </div>
            <p className="border border-dashed"></p>
            <div className="flex justify-between items-center">
                <p>Total</p>
                <p>500.00 BDT</p>
            </div>
            <button className="btn btn-info">Proceed to checkout</button>
        </div>
    );
};

export default Delivary;