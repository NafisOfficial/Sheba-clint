import { useContext } from 'react';
import logo from '../../../assets/images/logos/logos.png';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {

    const { user, handleLogOut } = useContext(AuthContex)

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
                <img alt={user?.displayName} src={user?.photoURL}  />
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
                        <Link to="/info" className='md:text-base text-sm'>Info</Link>
                    </div>
                    <div>
                        <Link to="/news" className='md:text-base text-sm'>News</Link>
                    </div>
                    <div>
                        <button className='md:p-2 rounded-full hover:bg-orange-300'><IoCartOutline className='md:text-3xl text-base' /></button>
                    </div>
                    {user ? userDropdown : <Link to='/login' className="btn md:btn-md btn-sm btn-active btn-info">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;