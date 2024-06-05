
const Profile = () => {
    return (
        <div className="flex">
            <div className="w-4/12 bg-[]">
                <img src="" alt="" />
                <div>
                    <p>Name:</p>
                    <p>Age:</p>
                    <p>Blood Group:</p>
                </div>
            </div>
            <div className="w-8/12 bg-white">
                <div>
                    <div>
                        <h1>Contact Information:</h1>
                        <div>
                            <p>Email</p>
                            <p>Phone</p>
                        </div>
                    </div>
                    <div>
                        <h1>Present Address:</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;