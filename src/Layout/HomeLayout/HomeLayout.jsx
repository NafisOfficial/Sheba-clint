import { useContext, useEffect, useState } from 'react';
import MostOrdered from '../../Component/Home/MostOrdered/MostOrdered';
import NavOption from '../../Component/SideNavigation/NavOption/NavOption';
import useGetOptions from '../../Hooks/useGetOptions';
import useGetProduct from '../../Hooks/useGetProduct';
import { StatusContext } from '../../Provider/StatusProvider/StatusProvider';

const HomeLayout = () => {
    // getting option from custom hook by api call
    const [isLoadingGeneric, genericOptions] = useGetOptions("generic");
    const [isLoadingForm, formOptions] = useGetOptions("form");
    const [isLoadingDose, doseOptions] = useGetOptions("dose");
    // getting selected options form navOption page
    const [selectedOptions, setSelectedOptions] = useState({});
    // for keeping filtered data
    const [filteredData, setFilteredData] = useState([])
    //getting all drugs from custom hook by api call
    const [isLoading, drugs] = useGetProduct();
    //drawer status manage
    const {isDrawerOpened} = useContext(StatusContext);



    // get options from form file/
    useEffect(() => {
        const filterdData = drugs?.filter(drug => {
            return Object?.keys(selectedOptions)?.every(key => {
                if (drug[key] && selectedOptions[key].length > 0) {
                    return selectedOptions[key]?.includes(drug[key])
                } else {
                    return true;
                }
            })
        })

        setFilteredData(filterdData)
    }, [drugs, selectedOptions])


    const noData = <div className='h-full'>No data avialable</div>


    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" checked={isDrawerOpened} readOnly type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* main body content  */}
                {filteredData.length>0?<MostOrdered data={filteredData} isLoading={isLoading} />:noData}
            </div>
            <div className="drawer-side top-20 mb-4 ms-2 z-50">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-white rounded text-base-content w-80 px-4 py-10">
                    {/* sidebar contain */}
                    <div className='text-center text-xl text-gray-600 '>Filters</div>
                    <div><h1 className='mt-5 mb-3 text-lg'>Drugs by generic:</h1>
                        {isLoadingGeneric ? <span className="loading loading-spinner loading-md"></span> : <div className='grid grid-cols-2 gap-3'>
                            {genericOptions?.map((dt, index) => <NavOption key={index} setSelectedOptions={setSelectedOptions} option={dt} previousValue={selectedOptions} optionName="generic" />)}
                        </div>}
                    </div>
                    <div>
                        <h1 className='mt-5 mb-3 text-lg'>Drugs by Brand:</h1>
                        {isLoadingForm ? <span className="loading loading-spinner loading-md"></span> : <div className='grid grid-cols-2 gap-3'>
                            {formOptions?.map((dt, index) => <NavOption key={index} setSelectedOptions={setSelectedOptions} option={dt} previousValue={selectedOptions} optionName="form" />)}
                        </div>}
                    </div>
                    <div>
                        <h1 className='mt-5 mb-3 text-lg'>Drugs by dose:</h1>
                        {isLoadingDose ? <span className="loading loading-spinner loading-md"></span> : <div className='grid grid-cols-2 gap-3'>
                            {doseOptions?.map((dt, index) => <NavOption key={index} setSelectedOptions={setSelectedOptions} option={dt} previousValue={selectedOptions} optionName="dose" />)}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;