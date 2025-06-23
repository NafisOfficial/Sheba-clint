import DrugCard from "../../Shared/DrugCard/DrugCard";

const MostOrdered = ({data}) => {


    if(data?.length === 0){
        return <div className='h-full'>No data avialable</div>
    }



    return (
        <div className="grid grid-cols-2 gap-2 mx-3 md:grid-cols-4 ">
            {data?.map(drug=><DrugCard key={drug._id} data={drug}/>)}
        </div>
    );
};

export default MostOrdered;