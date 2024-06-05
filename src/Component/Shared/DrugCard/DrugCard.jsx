import { IoCartOutline } from "react-icons/io5";

const DrugCard = ({ data, offer }) => {

    if (data?.form === "tablet") {
        data.drugImg = "https://i.ibb.co/JQ8tMXX/tablets2.png"
    } else if (data?.form === "capsule") {
        data.drugImg = "https://i.ibb.co/rmR7nyV/capsules3.png"
    }

    return (
        <div className='m-5'>
            <div className="card w-auto bg-white shadow-xl">
                <figure>
                    <img src={data.drugImg} alt={data?.form} className="rounded-xl h-32 w-32" />
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
                        {offer?.isOffered && <p className="text-blue-700 text-sm">{offer?.details}</p>}
                        <button className="btn btn-sm ms-auto btn-info rounded-full"><IoCartOutline className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrugCard;