import { useMutation, useQuery } from "@tanstack/react-query";


const useUserHandler = (needUsers) => {
    

    const getAllUser = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://sheba-server.vercel.app/users/all")
            if (!res.ok) {
                throw new Error("Failed to fetch users data");
            }
            const json = await res.json();

            return json.data;
        },
        enabled: needUsers
    })




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
    })


    const updateUser = useMutation({
        mutationFn: async ({email, singleUser}) => {
            const res = await fetch(`https://sheba-server.vercel.app/users/update/${email}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(singleUser)
            })

            if (!res.ok) {
                throw new Error("Failed to delete user");
            }
        },
    })

    const deleteUser = useMutation({
        mutationFn: async ({ email }) => {
            const res = await fetch(`https://sheba-server.vercel.app/users/delete/${email}`, {
                method: "DELETE",
            })
            if (!res.ok) {
                throw new Error("Failed to delete user");
            }
        },
    })





    return { getAllUser, postUser, updateUser, deleteUser }
};

export default useUserHandler;