import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DrugCard from '../../Component/Shared/DrugCard/DrugCard';

const AllMedicine = () => {

    const datas = useLoaderData();
    return (
        <div>
            <h1 className='mb-5 mt-10 text-2xl font-bold text-center'>All Medicine of our collection appears here</h1>
            <div className='grid grid-cols-4'>
                {datas?.map(data => <DrugCard key={data?._id} data={data} />)}
            </div>
        </div>
    );
};

export default AllMedicine;