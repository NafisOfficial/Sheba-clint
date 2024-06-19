import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider/AuthProvider";



const useCart = () => {
    const {user} = useContext(AuthContex);

    const fetchCart = async () =>{
        const result = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
        return result.json();
    }

    const {data} = useQuery({
        queryKey: ["allCarts",user?.email],
        queryFn: fetchCart
    })
};

export default useCart;