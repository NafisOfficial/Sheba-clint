import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const useUserHandler = (needUsers) => {

    const navigate = useNavigate();

    const getAllUser = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/users/all")
            if (!res.ok) {
                throw new Error("Failed to fetch users data");
            }
            const json = await res.json();

            return json.data;
        },
        enabled: needUsers
    })

    

    const queryClient = useQueryClient();

    const postUser = useMutation({
        mutationFn: async (userObject) => {
        const res = await fetch('https://sheba-server.vercel.app/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })
        if (!res.ok) {
            throw new Error("Failed to post user data");
        }
    },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] })
        }
    })


    const updateUser = useMutation({
        mutationFn: (email,userObject)=>{
            fetch(`https://sheba-server.vercel.app/users/update/${email}`,{
                    method:"PATCH",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userObject)
                }).then(()=>{
                    toast.success("User update successfully");
                    navigate("/profile");
                }).catch(()=>{
                    toast.error("Failed to update data")
                })
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ["users"] })
        }
    })

    const deleteUser = useMutation({
        mutationFn: ({email})=>{
            fetch(`http://localhost:3000/users/delete/${email}`,{
                    method:"DELETE",
                }).then(()=>{
                    toast.success("User deleted successful");
                }).catch(()=>{
                    toast.error("Failed to delete user");
                })
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ["users"] })
        }
    })



    

    return {getAllUser, postUser, updateUser, deleteUser}
};

export default useUserHandler;