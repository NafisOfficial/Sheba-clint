import { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {

    //hooks
    const {handleLogin,isLoading} = useContext(AuthContext);
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const login=(event)=>{
        event.preventDefault();
        const Email = event.target.email.value;
        const Password = event.target.password.value;

        handleLogin(Email,Password)
        .then(()=>{
            isLoading(false);
            navigate(from,{replace: true})
            toast.success("Login successful")
        })
        .catch(()=>{
            setErrorMessage("Please check your email or password is not correct")
        })
    }

    // Todos :: Show and hide password and Password validation

    return (
        <div>
            <div className='flex md:flex-row flex-col h-screen'>
                <div className='flex flex-col bg-white md:w-8/12 w-full items-center justify-center'>
                    <h1 className='text-5xl font-bold text-center md:mb-10 my-3 text-[#F0BE61]'>Login to your account</h1>
                    <Form onSubmit={login} className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' autoComplete='on' placeholder="Type here" className="input input-bordered input-warning w-[400px]" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' autoComplete='on' placeholder="Type here" className="input input-bordered input-warning w-[400px]" />
                        </div>
                        {errorMessage && <p className='text-sm text-red-600'>{errorMessage}</p>}
                        <div className='md:mt-5 md:text-left md:mb-0 my-3 text-center'>
                            <input type="submit" className='btn btn-md btn-info px-10' value="login" />
                        </div>
                        
                    </Form>
                </div>
                <div className='flex flex-col md:gap-10 gap-5 px-10 text-white bg-[#f0be61] md:w-4/12 w-full text-center justify-center items-center'>
                    <h1 className='text-5xl font-bold'>New Here ?</h1>
                    <p>Sign up and discover a great amount of new opportunities</p>
                    <Link to='/signup' className='btn border-none rounded-md md:mb-0 mb-3 btn-info w-40'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;