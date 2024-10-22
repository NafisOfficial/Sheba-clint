import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider/AuthProvider";



const useCart = () => {
    const { user } = useContext(AuthContex);

    // if (!user?.email) {
    //     return [];
    // }
    try {
        const fetchCart = async () => {
            const result = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
            if(!result.ok){
                throw new Error("Failed to fetch cart data")
            }
            return result.json();
        }

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { refetch, data: allCarts = [] } = useQuery({
            queryKey: ["carts", user?.email],
            queryFn: fetchCart,
            enabled:!!user?.email
        })
    
        return [refetch, allCarts]
    } catch (error) {
        console.log("Error to fetching cart",error);
        return [];
    }

};

export default useCart;