import { IoCartOutline } from "react-icons/io5";
import tablet from '../../../assets/images/Icons/tablets2.png'

const DrugCard = ({ data }) => {



    return (
        <div className='m-5'>
            <div className="card w-auto bg-white shadow-xl">
                <figure>
                    <img src={tablet} alt={data?.form} className="rounded-xl h-32 w-32" />
                </figure>
                <div className="px-5 items-left ">
                    <div className="h-44">
                        <h2 className="card-title text-2xl">{data?.brand}<sub className='text-sm mt-2'>{data?.dose}</sub></h2>
                        <p><span className="font-semibold">Form:</span> {data.form}</p>
                        <p><span className="font-semibold">Generic:</span> {data.generic}</p>
                        <p><span className="font-semibold">Price per unit:</span> {data.price_per_unit} BDT</p>
                        <p><span className="font-semibold">Manufaturer:</span> {data.company_name}</p>
                    </div>
                    <div className="card-actions mb-5">
                        <button className="btn btn-sm ms-auto btn-info rounded-full"><IoCartOutline className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrugCard;