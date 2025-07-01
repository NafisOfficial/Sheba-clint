import './userModal.css'

const UserModal = ({ singleUser, action }) => {
    const { phone, photoURl, name, email } = singleUser;

    const handleClose = () => {
        action(false);
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
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between items-center'>
                                        <strong>Admin:</strong>
                                        <input type="checkbox" className="toggle toggle-warning" />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <strong>Restricted:</strong>
                                        <input type="checkbox" className="toggle toggle-warning" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <button className="btn btn-info btn-sm">Update</button>
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