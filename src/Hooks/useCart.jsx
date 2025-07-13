import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";



const useCart = () => {
    const { user } = useContext(AuthContext);
    const fetchCart = async () => {
        const result = await fetch(`https://sheba-server.vercel.app/carts?email=${user?.email}`)
        if (!result.ok) {
            throw new Error("Failed to fetch cart data")
        }
        const json = await result.json();
        return json.data;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { refetch, data: allCarts = [] } = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: fetchCart,
        enabled: !!user?.email
    })

    return [refetch, allCarts]

};

export default useCart;