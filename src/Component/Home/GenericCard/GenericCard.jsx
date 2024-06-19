import { Link } from 'react-router-dom';

const GenericCard = ({ name }) => {
    return (
        <div className='cursor-pointer'>
            <Link to={`/generic/:${name}`}>
                <div className="card w-96   bg-primary text-primary-content items-center">
                    <div className="card-body text-center">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GenericCard;