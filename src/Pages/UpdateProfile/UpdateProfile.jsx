import { useContext } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';



const UpdateProfile = () => {

    const { user, dbUser } = useContext(AuthContext);
    const navigate = useNavigate();

     const handleUpdate =(event)=>{
        event.preventDefault();
        const field = event.target;
        const name = field.name.value;
        const bloodGroup = field.bloodGroup.value;
        const age = field.age.value;
        const phone = field.phone.value;
        const village = field.village.value;
        const post_name = field.post_name.value;
        const zip_code = field.zip_code.value;
        const police_line = field.police_line.value;
        const district = field.district.value;
        const division = field.division.value;

        const userObject = {email: user?.email,name,bloodGroup,age,phone,village,post_name,zip_code,police_line,district,division}

        fetch(`https://sheba-server.vercel.app/users/update/${user?.email}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        }).then(()=>{
            toast.success("User update successful")
            navigate("/profile")
        }).catch(()=>{
            toast.error("Failed to update data")
        })
     }


    return (
        <Form onSubmit={handleUpdate} className="flex h-lvh">
            <div className="w-4/12 flex flex-col items-center mt-10">
                <img src={user?.photoURL} className="h-52 w-52 rounded-full" alt={user?.name} />
                <div className="mt-5 flex flex-col gap-2">
                    <p className='flex flex-col'><span className="font-semibold me-5">Name:</span><input defaultValue={user?.displayName} name='name' type="text" placeholder="Type here" className="input input-bordered input-info w-36" /></p>
                    <p className='flex flex-col'><span className="font-semibold me-5">Blood Group:</span><input type="text" defaultValue={dbUser?.bloodGroup || ""} name='bloodGroup' placeholder="Type here" className="input input-bordered input-info w-36" /></p>
                    <p className='flex flex-col'><span className="font-semibold me-5">Age:</span><input type="text" placeholder="Type here" defaultValue={dbUser?.age || ""} name='age' className="input input-bordered input-info w-36" /></p>
                </div>
            </div>
            <div className="w-8/12 bg-white p-10">
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="font-bold text-2xl">Contact Indivation:</h1>
                        <div className="mt-5 mx-10 flex flex-col gap-5">
                            <p><span className="font-semibold me-5">Email:</span>{user?.email}</p>
                            <p><span className="font-semibold me-5">Phone:</span><input type="text" placeholder="Type here" defaultValue={dbUser?.phone || ""} name='phone' className="input input-bordered input-info w-full max-w-xs" /></p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">Present Address:</h1>
                        <div className="grid grid-cols-3 gap-5 mt-5 mx-10">
                            <p><span className="font-semibold me-5">Village:</span><input type="text" placeholder="Type here" defaultValue={dbUser?.village || ""} name='village' className="input input-bordered input-info w-full max-w-xs" /></p>
                            <p><span className="font-semibold me-5">Post name:</span><input type="text" placeholder="Type here" defaultValue={dbUser?.post_name || ""} name='post_name' className="input input-bordered input-info w-full max-w-xs" /></p>
                            <p><span className="font-semibold me-5">Zip code:</span><input type="text" placeholder="Type here" defaultValue={dbUser?.zip_code || ""} name='zip_code' className="input input-bordered input-info w-full max-w-xs" /></p>
                            <p><span className="font-semibold me-5">Police line:</span><input type="text" placeholder="Type here" defaultValue={dbUser.police_line || ""} name='police_line' className="input input-bordered input-info w-full max-w-xs" /></p>
                            <p><span className="font-semibold me-5">District:</span><input type="text" placeholder="Type here" defaultValue={dbUser.district || ""} name='district' className="input input-bordered input-info w-full max-w-xs" /></p>
                            <p><span className="font-semibold me-5">Division:</span><input type="text" placeholder="Type here" defaultValue={dbUser.division || ""} name='division' className="input input-bordered input-info w-full max-w-xs" /></p>
                        </div>
                    </div>
                    <div className="mx-auto mt-5"><input type='submit' value="Update Profile" className="btn btn-info" /></div>
                </div>
            </div>
        </Form>
    );
};

export default UpdateProfile;