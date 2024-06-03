import { useState } from 'react';
import logo from '../../../assets/images/logos/logos.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [user,setUser] = useState(false)

    const userDropdown = <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
            <a className="justify-between">
                Profile
                <span className="badge">New</span>
            </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
    </ul>
</div>


    return (
        <div className='sticky top-0'>
            <div className="navbar bg-[#D6AD60] ]">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl"><img className='h-5 w-5' src={logo} alt="logo" />Sheba</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    {user? userDropdown : <Link to='/login' className="btn  btn-active btn-info">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;