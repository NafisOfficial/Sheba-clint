import { useContext, useState } from "react";
import DhakaCity from '../../../DhakaCity.json'
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { StatusContext } from "../../Provider/StatusProvider/StatusProvider";
import { toast } from "react-toastify";

const CheckOut = () => {
    const [isCOD, setCOD] = useState(false);
    const [isCheckedTerms, setChecked] = useState(false)
    const { user } = useContext(AuthContext);
    const { orderDetails } = useContext(StatusContext);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = user?.email;
        const phone = event.target.phone.value;
        const city = event.target.city.value;
        const thana = event.target.thana.value;
        const exactLocation = event.target.exactLocation.value;

        const userinfo = { name, email, phone, city, thana, exactLocation }

        orderDetails.userinfo = userinfo;
        orderDetails.CashOnDelivery = isCOD
        orderDetails.isCheckTermsAndCondition = isCheckedTerms
        orderDetails.currency = "BDT"

        if (isCheckedTerms && user) {
            fetch(`http://localhost:3000/carts/create-payment/${user?.email}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json' // Change from 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(orderDetails)
            })
            .then((res) => res.json())
            .then((data) => {
                if (data?.GatewayPageURL) {
                    // Ensure that you handle localhost URL dynamically in development and production
                    const gatewayUrl = data.GatewayPageURL.startsWith("http")
                        ? data.GatewayPageURL
                        : `http://localhost:3000${data.GatewayPageURL}`;
        
                    // Navigate to the payment gateway URL
                    window.location.href = gatewayUrl;
                } else {
                    console.error("Invalid GatewayPageURL received:", data);
                }
            })
            .catch((error) => console.error("Error during fetch:", error));
        }
        
        else{
            toast.error("Please check terms and condition")
        }
    }
    

    return (
        <div>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md my-5">
                <h2 className="text-2xl font-semibold mb-2">Checkout</h2>
                <div className="mb-2">
                    <h2 className="text-xl font-semibold">Purces Information</h2>
                    <p>Total item: {orderDetails["orders"].length}</p>
                    <p>Total cost: {orderDetails?.totalPrice + 150} BDT</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
                    <div className="mb-2">
                        <label className="flex items-center cursor-pointer">
                            <input
                                required
                                type="checkbox"
                                name="shippingMethod"
                                value="delivery"
                                onChange={() => setCOD(true)}
                                className="mr-2"
                            />
                            Cash on delivery
                        </label>
                    </div>
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="name">
                                Full name <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                defaultValue={user?.displayName}
                                id="name"
                                type="text"
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="email"
                            >
                                Email address <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                readOnly
                                value={user?.email}
                                id="email"
                                type="email"
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter email address"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="phone">
                                Phone number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center border rounded-md overflow-hidden">
                                <div className="flex items-center bg-gray-50 px-3">
                                    <span className="text-gray-700 font-medium">+88</span>
                                </div>
                                <input
                                    required
                                    id="phone"
                                    type="tel"
                                    className="flex-1 p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="city">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <select
                                    required
                                    name="city"
                                    id="city"
                                    className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    <option defaultValue="Dhaka" value="Dhaka">Dhaka</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="country">
                                    Thana <span className="text-red-500">*</span>
                                </label>
                                <select
                                    required
                                    name="thana"
                                    id="city"
                                    className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring focus:ring-blue-300"
                                >
                                    {DhakaCity.map((city,index) => <option value={city.name} key={index}>{city.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="email"
                            >
                                Exact location<span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                name="exactLocation"
                                id="exactLocation"
                                type="text"
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter address"
                            />
                        </div>
                        <div className="flex items-start">
                            <input
                                onClick={() => setChecked(true)}
                                required
                                id="terms"
                                type="checkbox"
                                className="mt-1 mr-2"
                            />
                            <label htmlFor="terms" className="text-sm">
                                I have read and agree to the{" "}
                                <span className="text-blue-600 underline cursor-pointer">
                                    Terms and Conditions
                                </span>
                                .
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;