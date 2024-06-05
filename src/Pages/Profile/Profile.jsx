import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const { user } = useContext(AuthContex)
    const [userData, setUserData] = useState([]);

    const notSet = "not set yet !";



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/${user?.email}`)
                const json = await response.json()
                setUserData(json)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData()
    }, [])



    return (
        <div className="flex h-lvh">
            <div className="w-4/12 flex flex-col items-center mt-10">
                <img src={user?.photoURL} className="h-52 w-52" alt={user?.name} />
                <div className="mt-5">
                    <p><span className="font-semibold me-5">Name:</span> {user?.displayName}</p>
                    <p><span className="font-semibold me-5">Blood Group:</span> not set</p>
                    <p><span className="font-semibold me-5">Age:</span> not set</p>
                </div>
            </div>
            <div className="w-8/12 bg-white">
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="font-bold text-2xl">Contact Information:</h1>
                        <div className="mt-5 mx-10 flex flex-col gap-5">
                            <p><span className="font-semibold me-5">Email:</span> {user?.email}</p>
                            <p><span className="font-semibold me-5">Phone:</span> {notSet}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">Present Address:</h1>
                        <div className="grid grid-cols-3 gap-5 mt-5 mx-10">
                            <p><span className="font-semibold me-5">Village:</span> {notSet}</p>
                            <p><span className="font-semibold me-5">Post name:</span> {notSet}</p>
                            <p><span className="font-semibold me-5">Zip code:</span> {notSet}</p>
                            <p><span className="font-semibold me-5">Police line:</span> {notSet}</p>
                            <p><span className="font-semibold me-5">District:</span> {notSet}</p>
                            <p><span className="font-semibold me-5">Division:</span> {notSet}</p>
                        </div>
                    </div>
                    <div className="mx-auto mt-20"><Link to="/update-profile"><button className="btn btn-info">Update Profile</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;