

const UsersCard = ({ user }) => {

    const { phone, photoURl, name, email } = user;


    console.log(user);

    return (
        <div className="border flex flex-col gap-5 border-blue-700 rounded-xl">
            <div className=" bg-gradient-to-r from-[#FD1D1D] to-[#FCB045] rounded-t-xl">
                <img src={photoURl} className="w-24 h-24 rounded-full relative top-10 left-5 bg-white" />
            </div>
            <div className="m-5">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default UsersCard;