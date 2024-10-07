import { useContext } from 'react';
import logo from '../../../assets/images/logos/logos.png';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useCart from '../../../Hooks/useCart';

const Navbar = () => {

    const { user, handleLogOut } = useContext(AuthContex)
    const [, allCarts] = useCart();



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
                <Link to={`/profile`} className="justify-between">
                    Profile
                </Link>
            </li>
            <li><button onClick={signOut}>Logout</button></li>
        </ul>
    </div>


    return (
        <div className='sticky top-0 z-30'>
            <div className="navbar bg-[#D6AD60] ]">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost md:text-xl text-sm"><img className='md:h-5 md:w-5 h-4 w-4' src={logo} alt="logo" />Sheba</Link>
                </div>
                <div className="flex-none md:gap-7 gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input md:input-md input-sm input-bordered md:w-36 w-16 md:w-auto" />
                    </div>
                    <div>
                        <Link to="/all-medicine" className='md:text-base text-sm'>All medicine</Link>
                    </div>
                    <div>
                        <Link to="/news" className='md:text-base text-sm'>News</Link>
                    </div>
                    <Link to="/carts" tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm bg-red-500 text-white indicator-item">{allCarts?.length}</span>
                        </div>
                    </Link>
                    {user ? userDropdown : <Link to='/login' className="btn md:btn-md btn-sm btn-active btn-info">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;