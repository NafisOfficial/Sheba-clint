import { FaChevronDown } from "react-icons/fa";


const AddProduct = () => {
    return (
        <div className="flex justify-center items-center w-full h-full py-10">
            <div className="border border-4 border-warning p-5 rounded flex flex-col gap-2">
                <div className="text-center">
                    <p className="my-5 font-bold text-2xl">Add a medicine</p>
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Image</span></label>
                    <input type="file" className="file-input file-input-bordered file-input-warning w-full" />
                </div>
                <div className="flex gap-2">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Brand</span></label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Dose</span></label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Select a form</span></label>
                        <select className="select select-warning max-w-xs">
                            <option selected>Tablet</option>
                            <option>Capsule</option>
                            <option>Syrup</option>
                            <option>Ointment</option>
                            <option>Drops</option>
                            <option>Inhalers</option>
                            <option>Suppositories</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Generic</span></label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Price Per unit</span></label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Unit per strip (optional)</span></label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Producer</span></label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text font-semibold text-lg">Add additional Information (optional but recommended)</span>
                            <FaChevronDown />
                        </label>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="text-center mt-5">
                    <input type="submit" className="btn btn-info" />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;