import { useState } from 'react';
import useUserHandler from '../../../Hooks/useUserHandler';
import './userModal.css'
import { toast } from 'react-toastify';

const UserModal = ({ singleUser, action, refetch }) => {
    const { phone, photoURl, name, email, role, restricted = false } = singleUser;
    const [isAdmin, setAdmin] = useState(role === "admin"? true:false);
    const [isRestricted, setRestricted] = useState(restricted);
    const { updateUser } = useUserHandler();

    const handleClose = () => {
        action(false);
    }

    const handleUpdate = () => {
        singleUser.role = isAdmin ? "admin" : "user",
        singleUser.restricted = isRestricted

        updateUser.mutate({ email, singleUser },
            {
                onSuccess: () => {
                    toast.success("update successfully");
                    refetch()
                },
                onError: () => {
                    toast.error("Failed to update user");
                }
            }
        );
    }



    return (
        <>
            <div className="Modal">
                <div className="Overlay">
                    <div className="modalContent">
                        <div className="border flex flex-col gap-5 border-blue-700 rounded-xl">
                            <div className="relative h-24 bg-gradient-to-r from-[#FD1D1D] to-[#FCB045] rounded-t-xl">
                                <img src={photoURl} className="w-24 h-24 rounded-full absolute top-10 left-5 bg-white" />
                            </div>
                            <div className="pt-10 px-5 flex flex-col flex-grow">
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Phone:</strong> {phone}</p>
                                <p><strong>Role:</strong> {role}</p>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between items-center'>
                                        <strong>Admin:</strong>
                                        <input onClick={() => setAdmin(!isAdmin)} defaultChecked={role === "admin"?true:false} type="checkbox" className="toggle toggle-warning" />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <strong>Restricted:</strong>
                                        <input onClick={() => setRestricted(!isRestricted)} defaultChecked={restricted===true?true:false} type="checkbox" className="toggle toggle-warning" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <button onClick={handleUpdate} className="btn btn-info btn-sm">Update</button>
                            </div>
                        </div>
                        <button onClick={handleClose} className='btn btn-info btn-close'>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserModal;