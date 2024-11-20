import { Link } from 'react-router-dom';

const GenericCard = ({ name }) => {
    return (
        <div className='cursor-pointer'>
            <Link to={`/generic/${name}`}>
                <div className="card w-28 bg-primary text-primary-content items-center md:w-96">
                    <div className="card-body p-3 md:p-8 text-center">
                        <h2 className="card-title text-sm md:text-xl">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GenericCard;