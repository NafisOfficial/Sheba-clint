import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";



const UpdateProduct = () => {
    const [open, setOpen] = useState(false);
    const data = useLoaderData();
    const navigate = useNavigate();

    const { _id,image, brand, dose, form, generic, company_name, price_per_unit, indications, interaction, mode_of_action, precautions_and_warnings, pregnancy_and_lactation, side_effects } = data


    const handleSubmit=(event)=>{
        event.preventDefault();

        const target = event.target;
        const brand = target.brand.value || "";
        const dose = target.dose.value || "";
        const form = target.form.value || "";
        const company_name = target.company_name.value || "";
        const generic = target.generic.value || "";
        const price_per_unit = target.price_per_unit.value || "";
        const unit_per_strip = target.pack_size_and_price.value || "";
        const indications = target?.indications?.value || "";
        const mode_of_action = target?.mode_of_action?.value || "";
        const side_effects = target?.side_effects?.value || "";
        const precautions_and_warnings = target?.precautions_and_warnings?.value || "";
        const pregnancy_and_lactation = target?.pregnancy_and_lactation?.value || "";
        const interaction = target?.interaction?.value || "";
        
        const product = {brand,dose,form,company_name,generic, price_per_unit, unit_per_strip, indications, mode_of_action, side_effects, precautions_and_warnings, pregnancy_and_lactation, interaction};


        fetch(`http://localhost:3000/drugs/update/${_id}`,{
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(product)
                }).then(()=>{
                    navigate(`/dashboard/details/${_id}`);
                    toast.success("Data updated");
                }).catch(()=>{
                    toast.error("Filed to update data");
                })
    }

    return (
        <div className="flex justify-center items-center w-full h-full py-10">
            <Form onSubmit={handleSubmit} className="border border-4 border-warning p-5 rounded flex flex-col gap-2">
                <div className="text-center">
                    <p className="my-5 font-bold text-2xl">Update medicine data</p>
                </div>
                <div>
                    <img src={image} alt="product" className="h-32 w-32" />
                </div>
                <div className="flex gap-2">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Brand</span></label>
                        <input type="text" name="brand" defaultValue={brand} placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Dose</span></label>
                        <input type="text" name="dose" defaultValue={dose} placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Select a form</span></label>
                        <select name="form" defaultValue={form} className="select select-warning max-w-xs">
                            <option value="tablet">Tablet</option>
                            <option value="capsule">Capsule</option>
                            <option value="syrup">Syrup</option>
                            <option value="ointment">Ointment</option>
                            <option value="drop">Drop</option>
                            <option value="inhaler">Inhaler</option>
                            <option value="suppository">Suppository</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Generic</span></label>
                        <input type="text" name="generic" defaultValue={generic} placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Price Per unit</span></label>
                        <input type="text" name="price_per_unit" defaultValue={price_per_unit} placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Unit per strip (optional)</span></label>
                        <input type="text" name="pack_size_and_price" defaultValue={10} placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Producer</span></label>
                        <input type="text" name="company_name" defaultValue={company_name} placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label onClick={(event) => {
                            event.preventDefault();
                            return setOpen(!open)
                        }} className="cursor-pointer label">
                            <span className="label-text font-semibold text-lg">Add additional Information (optional but recommended)</span>
                            {open ? <FaChevronUp /> : <FaChevronDown />}
                        </label>
                    </div>
                    {open && <div>
                        <div className="grid gap-2 grid-cols-2">
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Indication of the drug</span></label>
                                <textarea name="indications" defaultValue={indications} className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Mode of action of drug</span></label>
                                <textarea name="mode_of_action" defaultValue={mode_of_action} className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Side Effect</span></label>
                                <textarea name="side_effects" defaultValue={side_effects} className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Precaution and warning</span></label>
                                <textarea name="precautions_and_warnings" defaultValue={precautions_and_warnings} className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Caution for pregnant patient</span></label>
                                <textarea name="pregnancy_and_lactation" defaultValue={pregnancy_and_lactation} className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Interaction with other</span></label>
                                <textarea name="interaction" defaultValue={interaction} className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="text-center mt-5">
                    <input type="submit" className="btn btn-info" />
                </div>
            </Form>
        </div>
    );
};

export default UpdateProduct;