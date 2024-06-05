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
                toast.success("logout successful")
            })
            .catch(() => {

            })
    }


    const userDropdown = <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img alt={user?.displayName} src={user?.photoURL}  />
            </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
                    <Link to="/" className="btn btn-ghost text-xl"><img className='h-5 w-5' src={logo} alt="logo" />Sheba</Link>
                </div>
                <div className="flex-none gap-7">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className='mx-3'>
                        <Link to="/info">Info</Link>
                    </div>
                    <div>
                        <Link to="/News ">News</Link>
                    </div>
                    <div>
                        <button className='p-2 rounded-full hover:bg-orange-300'><IoCartOutline className='text-3xl' /></button>
                    </div>
                    {user ? userDropdown : <Link to='/login' className="btn  btn-active btn-info">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;