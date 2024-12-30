import { Link } from 'react-router-dom';

const SuccessTr = () => {
    return (
        <div className='bg-white p-10 w-80 mx-auto flex flex-col gap-5 my-10'>
            <p className='text-green-600 text-xl font-bold'>payment successful</p>
            <Link to="/" className='btn btn-success text-white text-center'>Go to Home</Link>
        </div>
    );
};

export default SuccessTr;