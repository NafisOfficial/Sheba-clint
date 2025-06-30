import Loading from "../../Component/Shared/Loading/Loading";
import UsersCard from "../../Component/Users/UsersCard/UsersCard";
import useUserHandler from "../../Hooks/useUserHandler";



const ManageUser = () => {

    
    const {getAllUser} = useUserHandler(true);
    const {data: users=[],isLoading} = getAllUser;
    
    if(isLoading){
        return <div className="flex flex-col justify-center items-center w-full h-full">
            <Loading style={{ size: "lg", margin: "mt-1" }}/>
            <span className="text-warning">Loading for user.....</span>
        </div>
    }

    return (
        <div className="grid grid-cols-4 gap-5 m-5">
            {users?.map((user)=><UsersCard key={user._id} user={user}/>)}
        </div>
    );
};

export default ManageUser;