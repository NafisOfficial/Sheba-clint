import { useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../assets/images/logos/logos.png';
import useCart from '../../../Hooks/useCart';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { StatusContext } from '../../../Provider/StatusProvider/StatusProvider';


const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext)
    const [, allCarts] = useCart();
    const {isDrawerOpened,setDrawerOpen} = useContext(StatusContext);



    const signOut = () => {
        handleLogOut()
            .then(() => {
                toast.success("logout successful");
            })
            .catch(() => {
                toast.error("Internal server error");
            })
    }


    const userDropdown = <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="md:w-10 w-7 rounded-full">
                <img alt={user?.displayName} src={user?.photoURL} />
            </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box md:w-52 w-32">
            <li>
                {Options["userUtility"]?.map((utility, index) => <Link key={index} to={utility?.path}>{utility?.tittle}</Link>)}
            </li>
            <li><button onClick={signOut}>Logout</button></li>
        </ul>
    </div>


    return (
        <div className='sticky top-0 z-30'>
            <div className="navbar bg-[#D6AD60] pe-3 md:pe-5">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost md:text-xl md:flex text-sm hidden"><img className='md:h-5 md:w-5 h-4 w-4' src={logo} alt="logo" />Sheba</Link>
                    <RxHamburgerMenu onClick={()=>setDrawerOpen(!isDrawerOpened)} className='block md:hidden text-2xl ms-2'/>
                </div>
                <div className='navbar-center hidden md:flex'>
                    <input type="text" className='w-80 px-3 py-2 focus:outline-none rounded-l-lg' name="search" id="search" placeholder='Enter your keyword...'/>
                    <button className='bg-info px-5 py-2 rounded-r-lg'><FaSearch className='text-2xl text-white'/></button>
                </div>
                <div className="navbar-end">
                    <div>
                        {Options["navigation"]?.map((option, index) => <Link key={index} to={option?.path} className='md:text-base text-sm ms-3'>{option?.tittle}</Link>)}
                    </div>
                    <Link to="/carts" tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm bg-red-500 text-white indicator-item">{allCarts?.length}</span>
                        </div>
                    </Link>
                    {user ? userDropdown : <Link to='/login' className="btn md:btn-md md:ms-2 btn-sm btn-active btn-info text-white">Login</Link>}
                </div>
            </div>
        </div>
    );


};

export default Navbar;


//options for navigation and user utility
const Options = {
    navigation: [
        {
            tittle: "News",
            path: "/news"
        }
    ],
    userUtility: [
        {
            tittle: "Profile",
            path: "/profile"
        },
        {
            tittle: "History",
            path: "/history"
        }
    ]
}


