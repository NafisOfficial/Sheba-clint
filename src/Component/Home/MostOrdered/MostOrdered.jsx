import DrugCard from "../../Shared/DrugCard/DrugCard";
import useGetProduct from "../../../Hooks/useGetProduct";

const MostOrdered = () => {
    const [isLoading,drugs] = useGetProduct()


    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <div className="grid grid-cols-2 gap-2 mx-3 md:grid-cols-4 ">
            {drugs?.map(drug=><DrugCard key={drug._id} data={drug}/>)}
        </div>
    );
};

export default MostOrdered;