import { useQuery } from "@tanstack/react-query";


const useGetOptions = (optionName) => {
    const getOptions = async () => {
        const res = await fetch(`https://sheba-server.vercel.app/drugs/options/${optionName}`)
        if (!res.ok) {
            throw new Error("Failed to fetch options");
        }

        const json = await res.json();
        console.log(json);
        return json?.data;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, data: options = [] } = useQuery({
        queryKey: ["options", optionName],
        queryFn: getOptions,
        enabled: !!optionName
    })

    return [isLoading, options];

};

export default useGetOptions;