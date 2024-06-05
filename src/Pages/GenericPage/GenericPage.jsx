import { useLoaderData } from 'react-router-dom';
import DrugCard from '../../Component/Shared/DrugCard/DrugCard';

const GenericPage = () => {

    const datas = useLoaderData();

    const generName = datas[0]?.generic

    return (
        <div>
            <h1 className='mb-5 mt-10 text-2xl font-bold text-center'>All {generName} generic datas Are here</h1>
            <div className='grid grid-cols-4 '>
                {datas.map(data => <DrugCard key={data._id} data={data} />)}
            </div>
        </div>
    );
};

export default GenericPage;