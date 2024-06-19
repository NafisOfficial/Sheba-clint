import { useEffect, useState } from "react";
import DrugCard from "../../Shared/DrugCard/DrugCard";

const MostOrdered = () => {
    const [druglist,setDruglist] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/drugs/most-ordered")
        .then((res)=>res.json())
        .then((result)=>setDruglist(result))
    },[])

    return (
        <div className="grid md:grid-cols-4 grid-cols-2">
            {druglist.map(drug=><DrugCard key={drug._id} data={drug}/>)}
        </div>
    );
};

export default MostOrdered;