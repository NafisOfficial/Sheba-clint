import { useState } from "react";
import Loading from "../../Component/Shared/Loading/Loading";
import UserModal from "../../Component/Users/UserModal/UserModal";
import UsersCard from "../../Component/Users/UsersCard/UsersCard";
import useUserHandler from "../../Hooks/useUserHandler";



const ManageUser = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [singleUser, setSingleUser] = useState({});
    const {getAllUser} = useUserHandler(true);
    const {data: users=[],isLoading,refetch} = getAllUser;
    
    if(isLoading){
        return <div className="flex flex-col justify-center items-center w-full h-full">
            <Loading style={{ size: "lg", margin: "mt-1" }}/>
            <span className="text-warning">Loading for user.....</span>
        </div>
    }

    if(!isLoading && isModalOpen === true){
        return <UserModal singleUser={singleUser} action={setModalOpen}/>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5">
            {users?.map((user)=><UsersCard key={user._id} user={user} action={setModalOpen} refetch={refetch}  callbackUser={setSingleUser}/>)}
        </div>
    );
};

export default ManageUser;