import { useQuery } from '@tanstack/react-query';

const useGetProduct = () => {
    try {
        const getProduct=async()=>{
            const res = await fetch("http://localhost:3000/drugs/most-ordered")
            if(!res.ok){
                throw new Error("Failed to fetch product data");
            }
            return res.json();
        }

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {isLoading,data:drugs=[]} = useQuery({
            queryKey:["drugs","mostOrdered"],
            queryFn: getProduct
        })

        return [isLoading,drugs]
    } catch (error) {
       console.log(error);
       return [];
    }
};

export default useGetProduct;