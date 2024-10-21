import MostOrdered from '../../Component/Home/MostOrdered/MostOrdered';
import Offered from '../../Component/Home/Offered/Offered';
import ViewAll from '../../Component/Home/ViewAll/ViewAll';
import NavOption from '../../Component/SideNavigation/NavOption/NavOption';
import useGetOptions from '../../Hooks/useGetOptions';

const HomeLayout = () => {
    const [,options] = useGetOptions("generic");

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                {/* main body content  */}
                <div className="divider divider-start ms-4 text-lg md:text-2xl">Most ordered</div>
                <MostOrdered />
                <div className="divider divider-start ms-4 text-lg md:text-2xl">Free home delivery</div>
                <Offered />
                <ViewAll />
            </div>
            <div className="drawer-side top-20 mb-4 ms-2">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-white rounded text-base-content min-h-full w-80 px-4 py-10">
                    {/* sidebar contain */}
                    <div className='text-center text-xl text-gray-600 '>Filters</div>
                    <div><h1>Drug by generic:</h1>
                        <div className='grid grid-cols-2'>
                            {options?.map((dt,index)=><NavOption key={index} option={dt}/>)}
                        </div>
                    </div>
                    <div><h1>Drug by class:</h1>
                        <div>

                        </div>
                    </div>
                    <div><h1>Drug by indication:</h1></div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;