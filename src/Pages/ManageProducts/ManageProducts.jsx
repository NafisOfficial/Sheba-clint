import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DrugCard from "../../Component/Shared/DrugCard/DrugCard";


const ManageProducts = () => {
    const [drugs, setDrugs] = useState({});
    const [page, setPage] = useState(1)


    const handleSelect = (event) => {
        event.preventDefault;
        const item = event.target.value;
        setPage(item);
    }

    useEffect(() => {
        fetch(`https://sheba-server.vercel.app/drugs/limited-drugs?page=${page}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("There was a server side error");
                } else {
                    return res.json();
                }
            })
            .then(json => setDrugs(json.data))
            .catch(() => {
                toast.error("Failed to load data");
            })
    }, [page])



    // if () {
    //     return <div className="flex flex-col justify-center items-center w-full h-full">
    //         <Loading style={{ size: "lg", margin: "mt-1" }} />
    //         <span className="text-warning">Loading for data.....</span>
    //     </div>
    // }

    return (
        <div className="my-3 flex flex-col justify-between h-[92%] mx-5">
            <div className="ms-auto">
                <Link to="/dashboard/add-products" className="btn btn-info">Add a item</Link>
            </div>
            <div className="grid grid-cols-2 gap-2 mx-3 md:grid-cols-4 my-5">
                {drugs?.allDrugs?.map((drug) => <DrugCard key={drug._id} data={drug} />)}
            </div>
            <div className="mx-auto">
                <div className="join" onClick={handleSelect}>
                    <input
                        className="join-item btn btn-square btn-info"
                        value="1"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked />
                    {
                        drugs && Array.from({length: Math.ceil(drugs.totalDrug/8)-1},(_,i)=>(
                            <input key={i+2} className="join-item btn btn-square btn-info"
                        value={i+2} type="radio" name="options" aria-label={i+2} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;