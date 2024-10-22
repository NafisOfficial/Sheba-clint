import { useEffect, useState } from 'react';
import MostOrdered from '../../Component/Home/MostOrdered/MostOrdered';
import NavOption from '../../Component/SideNavigation/NavOption/NavOption';
import useGetOptions from '../../Hooks/useGetOptions';
import useGetProduct from '../../Hooks/useGetProduct';

const HomeLayout = () => {
    const [isLoadingGeneric, genericOptions] = useGetOptions("generic");
    const [selectedOptions, setSelectedOptions] = useState({});
    const [filteredData,setFilteredData] = useState([])
    const [isLoading, drugs] = useGetProduct();




    useEffect(()=>{
        const filterdData = drugs?.filter(drug=>{
            return Object?.keys(selectedOptions)?.every(key=>{
                if(selectedOptions[key] && selectedOptions[key].length > 0){
                    return selectedOptions[key]?.includes(drug[key])
                }else{
                    return true;
                }
            })
        })

        setFilteredData(filterdData)
    },[drugs, selectedOptions])









    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                {/* main body content  */}
                {<MostOrdered data={filteredData} isLoading={isLoading} />}
            </div>
            <div className="drawer-side top-20 mb-4 ms-2">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-white rounded text-base-content min-h-full w-80 px-4 py-10">
                    {/* sidebar contain */}
                    <div className='text-center text-xl text-gray-600 '>Filters</div>
                    <div><h1 className='mt-5 mb-3 text-lg'>Drug by generic:</h1>
                        {isLoadingGeneric ? <span className="loading loading-spinner loading-md"></span> : <div className='grid grid-cols-2 gap-3'>
                            {genericOptions?.map((dt, index) => <NavOption key={index} setSelectedOptions={setSelectedOptions} option={dt} previousValue={selectedOptions} optionName="generic" />)}
                        </div>}
                    </div>
                    <div>
                        <h1 className='mt-5 mb-3 text-lg'>Drug by class:</h1>
                        <div>

                        </div>
                    </div>
                    <div>
                        <h1 className='mt-5 mb-3 text-lg'>Drug by indication:</h1>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;