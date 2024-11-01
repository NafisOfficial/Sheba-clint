import { useEffect, useState } from 'react';
import DrugCard from '../../Shared/DrugCard/DrugCard';

const Offered = () => {
    const [offeredProduts, setOfferedProduct] = useState([]);
    const offer = {
        isOffered: true,
        details: "Free home delevary available"
    }

    useEffect(()=>{
        fetch('https://sheba-server.vercel.app/drugs/category?company_name=Renata%20Limited')
        .then(res=>{
            if(!res.ok){
                throw new Error({errorMessage: "There was a server side error",status: 500})
            }else{
                return res.json()
            }
        })
        .then(data=>setOfferedProduct(data))
        .catch((error)=>{
            console.log(error);
        })
    },[])
    return (
        <div className='grid grid-cols-2 gap-2 mx-3 md:grid-cols-4'>
           {offeredProduts?.map(data=><DrugCard key={data._id} data={data} offer={offer}/>)}
        </div>
    );
};

export default Offered;