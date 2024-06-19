import { Link } from 'react-router-dom';

const ViewAll = () => {
    return (
        <div className='text-center my-5'>
            <Link to="/all-medicine" className="btn btn-active btn-info">All Medicine</Link>
        </div>
    );
};

export default ViewAll;