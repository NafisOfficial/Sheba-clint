
import { Form, Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider/AuthProvider';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';

const SignUp = () => {
    //hooks
    const { auth, isLoading, handleSignUpByGoogle, handleSignUp } = useContext(AuthContex)
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const emailPassSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        handleSignUp(email, password)
            .then(() => {
                updateProfile(auth?.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        isLoading(false);
                        navigate("/", { replace: true })
                    })
                    .catch(()=>{
                        setErrorMessage("Failed to update user !");
                    })
            })
            .catch(() => {
                setErrorMessage("Invalid email or password");
            })

    }

    const signUpByGoogle = () => {
        const provider = new GoogleAuthProvider();
        handleSignUpByGoogle(provider)
            .then(() => {
                isLoading(false);
                navigate("/", { replace: true })
            })
            .catch(() => {
                setErrorMessage("There was a problem in your gmail account");
            })
    }


    return (
        <div className='flex h-screen'>
            <div className='flex flex-col bg-[#f0be61] w-8/12 items-center justify-center'>
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
                    <div className='mt-8'>
                        <input type="submit" className='btn btn-md px-8 btn-info' value="Sign Up" />
                    </div>
                </Form>
            </div>
            <div className='flex flex-col gap-10 px-5 bg-white text-[#F0BE61]  w-4/12 text-center justify-center items-center'>
                <h1 className='text-5xl font-bold'>Have an account ?</h1>
                <p>If you already have na account you have to login</p>
                <Link to='/login' className='btn border-none rounded-md btn-info px-8'>Login</Link>
            </div>
        </div>
    );
};

export default SignUp;