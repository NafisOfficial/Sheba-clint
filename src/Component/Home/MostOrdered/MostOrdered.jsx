import DrugCard from "../../Shared/DrugCard/DrugCard";

const MostOrdered = ({data,isLoading}) => {


    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <div className="grid grid-cols-2 gap-2 mx-3 md:grid-cols-4 ">
            {data?.map(drug=><DrugCard key={drug._id} data={drug}/>)}
        </div>
    );
};

export default MostOrdered;