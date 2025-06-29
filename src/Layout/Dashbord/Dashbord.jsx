import { Link, Outlet, useLocation } from "react-router-dom";

const Dashbord = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="flex">
            <aside className="w-[300px] h-screen border-gray-400 bg-[#D6AD60] border-r-[1px] pt-5">
                <nav className="flex flex-col items-center justify-between h-full">
                    <label className="input input-bordered flex items-center input-sm gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <div className="flex flex-col w-full gap-3 px-5">{
                        Options.map((data)=><button key={data.id} className={`btn  btn-md text-white ${location.pathname === `${data.path}`? "btn-info":"btn-warning"}`}><Link to={data.path}>{data.name}</Link></button>)
                    }
                    </div>
                    <div className="text-white w-full bg-black py-3 text-center">
                        Stay with Sheba
                    </div>
                </nav>
            </aside>
            <main className="w-full">
                <Outlet/>
            </main>
        </div>
    );
};

export default Dashbord;



const Options = [
    {
        id: 1,
        name: "Users",
        path: "/dashboard/manage-users"
    },
    {
        id: 2,
        name: "Products",
        path: "/dashboard/manage-products"
    },
    {
        id: 3,
        name: "Orders",
        path: "/dashboard/manage-orders"
    },
    {
        id: 4,
        name: "Go to Home",
        path: "/"
    }
]