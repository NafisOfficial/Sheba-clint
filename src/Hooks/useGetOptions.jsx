import { useQuery } from "@tanstack/react-query";


const useGetOptions = (optionName) => {
    try {
        const getOptions= async()=>{
            const res = await fetch(`http://localhost:3000/drugs/options/${optionName}`)
            if(!res.ok){
                throw new Error("Failed to fetch options");
            }

            return res.json();   
        }

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {isLoading,data:options=[]} = useQuery({
            queryKey: ["options",optionName],
            queryFn: getOptions,
            enabled: !!optionName
        })

        return [isLoading,options];
    } catch (error) {
        console.log("Error to get options",error)
    }
};

export default useGetOptions;