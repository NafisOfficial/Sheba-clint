import { useEffect, useState } from "react";
import DrugCard from "../../Shared/DrugCard/DrugCard";

const MostOrdered = () => {
    const [druglist,setDruglist] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/drugs/most-ordered")
        .then((res)=>{
            if(!res.ok){
                throw new Error({errorMessage: "There was a server side error",status: 500});
            }
            return res.json()
        })
        .then((result)=>setDruglist(result))
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return (
        <div className="grid grid-cols-2 gap-2 mx-3 md:grid-cols-4 ">
            {druglist.map(drug=><DrugCard key={drug._id} data={drug}/>)}
        </div>
    );
};

export default MostOrdered;