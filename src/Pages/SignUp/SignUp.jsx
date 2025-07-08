
import { updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const SignUp = () => {
    //hooks
    const { auth, isLoading, handleSignUpByGoogle, handleSignUp } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const userObject = {}

    const emailPassSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        userObject.name = name;
        userObject.email = email;
        userObject.photoURl = "https://i.ibb.co/GtWpN1b/image.png";
        userObject.role = "user";

        handleSignUp(email, password)
            .then(() => {
                updateProfile(auth?.currentUser, {
                    displayName: name,
                    photoURL: "https://i.ibb.co/GtWpN1b/image.png"
                })
                    .then(() => {
                        fetch('http://localhost:3000/users', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userObject)
                        }
                        )
                        isLoading(false);
                        navigate(from, { replace: true });
                        toast.success("Signup successful");
                    })
                    .catch(() => {
                        setErrorMessage("Failed to update user !");
                    })
            })
            .catch(() => {
                toast.error("Failed to signup")
                setErrorMessage("Invalid email or password");
            })

    }

    const signUpByGoogle = () => {
        handleSignUpByGoogle()
            .then((userCredintial) => {

                const user = userCredintial.user;
                userObject.name = user?.displayName;
                userObject.email = user?.email;
                userObject.photoURl = user?.photoURL || "https://i.ibb.co/GtWpN1b/image.png"
                 userObject.role = "user";

                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userObject)
                })


                isLoading(false);
                navigate(from, { replace: true })
                toast.success("Signup successful");
            })
            .catch(() => {
                toast.error("Failed to signup");
                setErrorMessage("There was a problem in server");
            })
    }


    return (
        <div className='flex md:flex-row flex-col h-screen'>
            <div className='flex flex-col bg-[#f0be61] md:w-8/12 w-full items-center justify-center'>
                <h1 className='text-5xl font-bold text-center text-white'>Signup to your account</h1>
                <p className='text-md text-white my-3'>Signup using social network</p>
                <button className=' p-2 bg-white hover:bg-gray-200 rounded-full' onClick={signUpByGoogle}><FcGoogle className='text-2xl' /></button>
                <Form onSubmit={emailPassSignUp} className='flex flex-col gap-2'>
                    <div className="divider text-white">OR</div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name' autoComplete='on' placeholder="Type here" className="input input-bordered input-warning w-[400px]" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' placeholder="Type here" className="input input-bordered input-warning w-[400px]" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' autoComplete='on' placeholder="Type here" className="input input-bordered input-warning w-[400px]" />
                    </div>
                    {errorMessage && <p className='text-sm  text-red-600'>{errorMessage}</p>}
                    <div className='md:mt-8 my-3 md:text-left text-center'>
                        <input type="submit" className='btn btn-md px-8 btn-info' value="Sign Up" />
                    </div>
                </Form>
            </div>
            <div className='flex flex-col md:gap-10 gap-5 px-5 md:py-0 py-3  bg-white text-[#F0BE61]  md:w-4/12 w-full text-center justify-center items-center'>
                <h1 className='text-5xl font-bold'>Have an account ?</h1>
                <p>If you already have na account you have to login</p>
                <Link to='/login' className='btn border-none rounded-md btn-info px-8 '>Login</Link>
            </div>
        </div>
    );
};

export default SignUp;