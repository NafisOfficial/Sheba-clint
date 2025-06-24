import { useQuery } from "@tanstack/react-query";


const useGetSearchProduct = (param) => {

     const getSearchProduct= async()=>{
        const res = await fetch(`http://localhost:3000/drugs/category?brand=${param}`)
        if (!res.ok) {
            throw new Error("Failed to fetch product data");
        }
        const json = await res.json();
        return json.data;
     }


     const { data:searchDrugs=[], isLoading, } = useQuery({
        queryKey: ["searchDrugs", param],
        queryFn: getSearchProduct
    })


    return [isLoading, searchDrugs]
};

export default useGetSearchProduct;