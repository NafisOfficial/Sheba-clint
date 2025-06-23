import { useContext, useEffect, useRef, useState } from 'react';
import MostOrdered from '../../Component/Home/MostOrdered/MostOrdered';
import NavOption from '../../Component/SideNavigation/NavOption/NavOption';
import useGetOptions from '../../Hooks/useGetOptions';
import useGetProduct from '../../Hooks/useGetProduct';
import { StatusContext } from '../../Provider/StatusProvider/StatusProvider';
import Loading from '../../Component/Shared/Loading/Loading';

const HomeLayout = () => {
    // getting option from custom hook by api call
    const [isLoadingForOptions, options] = useGetOptions({opt1: "generic",opt2: "form", opt3: "dose"});
    const {genericOptions,formOptions,doseOptions} = options;

    // getting selected options form navOption page
    const [selectedOptions, setSelectedOptions] = useState({});
    // for keeping filtered data
    const [filteredData, setFilteredData] = useState([])
    //getting all drugs from custom hook by api call
    const [isLoadingForData, drugs] = useGetProduct();
    //drawer status manage
    const { isDrawerOpened, setDrawerOpen } = useContext(StatusContext);



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

    

    // drawer close side effect
    const drawerRef = useRef();

    useEffect(() => {
        const drawerClose = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setDrawerOpen(false);
            }
        }
        document.addEventListener("mousedown", drawerClose)
        return ()=>{
            document.removeEventListener("mousedown",drawerClose)
        }
    }, [])




    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" checked={isDrawerOpened} readOnly type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/*--------------------------- main body content  ------------------------------*/}
                {isLoadingForData ? <Loading style={{size: "lg"} }/>  : <MostOrdered data={filteredData} />}
            </div>
            <div className="drawer-side top-20 mb-4 ms-2 z-20">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-white rounded text-base-content w-80 px-4 py-10" ref={drawerRef}>
                    {/*-------------------------------- sidebar contain ---------------------------*/}
                    <div className='text-center text-xl text-gray-600 '>Filters</div>
                    {isLoadingForOptions ? <Loading style={{size: "lg", margin:"mt-4"} }/>:
                    <div>
                        <div><h1 className='mt-5 mb-3 text-lg'>Drugs by generic:</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            {genericOptions?.map((dt, index) => <NavOption key={index} setSelectedOptions={setSelectedOptions} option={dt} previousValue={selectedOptions} optionName="generic" />)}
                        </div>
                    </div>
                    <div>
                        <h1 className='mt-5 mb-3 text-lg'>Drugs by Brand:</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            {formOptions?.map((dt, index) => <NavOption key={index} setSelectedOptions={setSelectedOptions} option={dt} previousValue={selectedOptions} optionName="form" />)}
                        </div>
                    </div>
                    <div>
                        <h1 className='mt-5 mb-3 text-lg'>Drugs by dose:</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            {doseOptions?.map((dt, index) => <NavOption key={index} setSelectedOptions={setSelectedOptions} option={dt} previousValue={selectedOptions} optionName="dose" />)}
                        </div>
                    </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;