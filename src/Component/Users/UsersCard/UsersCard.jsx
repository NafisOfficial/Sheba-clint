import { toast } from "react-toastify";
import useUserHandler from "../../../Hooks/useUserHandler";



const UsersCard = ({ user,callbackUser,action,refetch }) => {
    const { phone, photoURl, name, email, role } = user;
    const {deleteUser} = useUserHandler();

    
    const handleUpdate =() =>{
        callbackUser(user);
        action(true);
    }

    const handleDelete=()=>{
        deleteUser.mutate({email},
            {
                onSuccess: ()=>{
                    toast.success("Deleted successfully");
                    refetch()
                },
                onError: ()=>{
                    toast.error("Failed to delete user");
                }
            }
        );
        refetch();
    }

    return (
        <div className="border flex flex-col gap-5 border-blue-700 rounded-xl">
            <div className="relative h-24 bg-gradient-to-r from-[#FD1D1D] to-[#FCB045] rounded-t-xl">
                <img src={photoURl} className="w-24 h-24 rounded-full absolute top-10 left-5 bg-white" />
            </div>
            <div className="pt-10 px-5 flex flex-col flex-grow">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Role:</strong> {role}</p>
            </div>
            <div className="flex justify-between items-center px-5 pb-5">
                <button onClick={handleUpdate} className="btn btn-info btn-sm">Update</button>
                <button onClick={handleDelete} className="btn btn-info btn-sm">Delete</button>
            </div>
        </div>
    );
};

export default UsersCard;