import React, { useEffect, useState } from 'react';
import DrugCard from '../../Shared/DrugCard/DrugCard';

const Offered = () => {
    const [offeredProduts, setOfferedProduct] = useState([]);
    const offer = {
        isOffered: true,
        details: "Free home delevary available"
    }

    useEffect(()=>{
        fetch('http://localhost:3000/drugs/category?company_name=Renata%20Limited')
        .then(res=>res.json())
        .then(data=>setOfferedProduct(data))
    },[])
    return (
        <div className='grid grid-cols-4'>
           {offeredProduts?.map(data=><DrugCard key={data._id} data={data} offer={offer}/>)}
        </div>
    );
};

export default Offered;