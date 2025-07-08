import { useQuery } from "@tanstack/react-query";


const useGetOptions = (optionObj) => {
    const searchParams = new URLSearchParams();
    
    for(let key in optionObj){
        if(optionObj[key] !== undefined && optionObj[key] !== null){
            searchParams.append(key,optionObj[key]);
        }
    }
    const searchString = searchParams.toString();



    const getOptions = async () => {
        const res = await fetch(`http://localhost:3000/drugs/options?${searchString}`)
        if (!res.ok) {
            throw new Error("Failed to fetch options");
        }

        const json = await res.json();
        return json?.data;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, data: options = [] } = useQuery({
        queryKey: ["options", optionObj],
        queryFn: getOptions,
        enabled: !!optionObj,
    })

    return [isLoading, options];

};

export default useGetOptions;