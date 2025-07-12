import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";


const AddProduct = () => {
    const [open, setOpen] = useState(false);


    const handleSubmit=(event)=>{
        event.preventDefault();

        const formData = new FormData();

        const target = event.target;
        const image = target.image.files[0];
        const brand = target.brand.value || "";
        const dose = target.dose.value || "";
        const form = target.form.value || "";
        const company_name = target.producer.value || "";
        const generic = target.generic.value || "";
        const price_per_unit = target.price_per_unit.value || "";
        const unit_per_strip = target.unit_per_strip.value || "";
        const indications = target?.indications?.value || "";
        const mode_of_action = target?.mode_of_action?.value || "";
        const side_effects = target?.side_effects?.value || "";
        const precautions_and_warnings = target?.precaution?.value || "";
        const pregnancy_and_lactation = target?.caution_for_pregnant?.value || "";
        const interaction = target?.interaction?.value || "";
        
        const product = {image,brand,dose,form,company_name,generic, price_per_unit, unit_per_strip, indications, mode_of_action, side_effects, precautions_and_warnings, pregnancy_and_lactation, interaction};

        for(const key in product){
            formData.append(key,product[key]);
        }

        fetch("http://localhost:3000/drugs/all-drugs",{
            method: "POST",
            body: formData
        }).then(()=>{
            toast.success("Data added");
        }).catch(()=>{
            toast.error("Filed to add data");
        })

        
    }
    return (
        <div className="flex justify-center items-center w-full h-full py-10">
            <Form onSubmit={handleSubmit} className="border border-4 border-warning p-5 rounded flex flex-col gap-2">
                <div className="text-center">
                    <p className="my-5 font-bold text-2xl">Add a medicine</p>
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Image</span></label>
                    <input required type="file" name="image" className="file-input file-input-bordered file-input-warning w-full" />
                </div>
                <div className="flex gap-2">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Brand</span></label>
                        <input required type="text" name="brand" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Dose</span></label>
                        <input required type="text" name="dose" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Select a form</span></label>
                        <select name="form" defaultValue="Tablet" className="select select-warning max-w-xs">
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
                        <input required type="text" name="generic" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Price Per unit</span></label>
                        <input required type="text" name="price_per_unit" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Unit per strip (optional)</span></label>
                        <input required type="text" name="unit_per_strip" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Producer</span></label>
                        <input required type="text" name="producer" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label onClick={(event) =>{
                            event.preventDefault();
                            return setOpen(!open)
                        } } className="cursor-pointer label">
                            <span className="label-text font-semibold text-lg">Add additional Information (optional but recommended)</span>
                            {open ? <FaChevronUp /> : <FaChevronDown />}
                        </label>
                    </div>
                    {open && <div>
                        <div className="grid gap-2 grid-cols-2">
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Indication of the drug</span></label>
                                <textarea name="indications" className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Mode of action of drug</span></label>
                                <textarea name="mode_of_action" className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Side Effect</span></label>
                                <textarea name="side_effects" className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Precaution and warning</span></label>
                                <textarea name="precaution" className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Caution for pregnant patient</span></label>
                                <textarea name="caution_for_pregnant" className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-semibold">Interaction with other</span></label>
                                <textarea name="interaction" className="textarea textarea-sm textarea-warning" placeholder="write here"></textarea>
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

export default AddProduct;