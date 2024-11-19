import  { useState } from 'react';

const Payment = () => {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };



    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Select Payment Method</h1>
            <form
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <div className="space-y-4">
                    {paymentMethods?.map(({ id, value, label, icon }) => (
                        <div key={id} className="flex items-center">
                            <input
                                type="radio"
                                id={id}
                                name="payment_method"
                                value={value}
                                checked={selectedPaymentMethod === value}
                                onChange={handlePaymentChange}
                                className="hidden peer"
                            />
                            <label
                                htmlFor={id}
                                className="flex items-center w-full p-3 border rounded-lg cursor-pointer transition-all 
                           peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-lg
                           hover:bg-gray-50 peer-checked:hover:bg-blue-700"
                            >
                                <span className="text-2xl mr-3">{icon}</span>
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full bg-green-600 text-white font-semibold py-2 rounded-lg 
                     transition-colors hover:bg-green-700 focus:ring-4 focus:ring-green-300"
                >
                    Update Payment Method
                </button>
            </form>
        </div>
    );
};

export default Payment;


const paymentMethods = [
    { id: "BKash", value: "BKash", label: "BKash", icon: "💳" },
    { id: "Nagad", value: "Nagad", label: "Nagad", icon: "💳" },
    { id: "Upay", value: "Upay", label: "Upay", icon: "💳" },
    { id: "bank_transfer", value: "Bank Transfer", label: "Bank Transfer", icon: "🏦" },
    { id: "cod", value: "COD", label: "Cash on Delivery (COD)", icon: "🚚" },
]