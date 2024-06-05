import { Outlet } from 'react-router-dom';
import Navbar from '../../Component/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition:Bounce
            />
        </div>
    );
};

export default Main;