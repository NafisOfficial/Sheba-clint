import { Link } from 'react-router-dom';

const SuccessTr = () => {
    return (
        <div>
            <p className='text-green-600 text-xl font-bold'>payment successful</p>
            <Link to="/orders">Go to Home</Link>
        </div>
    );
};

export default SuccessTr;