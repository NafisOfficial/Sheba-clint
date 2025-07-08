import { useQuery } from '@tanstack/react-query';

const useGetProduct = () => {

    const getProduct = async () => {
        const res = await fetch("http://localhost:3000/drugs/all-drugs")
        if (!res.ok) {
            throw new Error("Failed to fetch product data");
        }
        const json = await res.json();
        return json?.data;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data:drugs=[], isLoading } = useQuery({
        queryKey: ["drugs", "mostOrdered"],
        queryFn: getProduct
    })


    return [isLoading, drugs]
};

export default useGetProduct;