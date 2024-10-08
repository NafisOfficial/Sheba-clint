import MostOrdered from '../../Component/Home/MostOrdered/MostOrdered';
import Offered from '../../Component/Home/Offered/Offered';
import ViewAll from '../../Component/Home/ViewAll/ViewAll';

const HomeLayout = () => {
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
            <div className="drawer-side top-20 ms-2">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-white rounded text-base-content min-h-full w-80 p-4">
                    {/* sidebar contain */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default HomeLayout;