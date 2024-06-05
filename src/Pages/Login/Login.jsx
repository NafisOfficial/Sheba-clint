import { useContext, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    //hooks
    const {handleLogin,isLoading} = useContext(AuthContex);
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate();

    const login=(event)=>{
        event.preventDefault();
        const Email = event.target.email.value;
        const Password = event.target.password.value;

        handleLogin(Email,Password)
        .then(()=>{
            isLoading(false);
            navigate("/",{replace: true})
            toast.success("Login successful")
        })
        .catch(()=>{
            setErrorMessage("Please check your email or password is not correct")
        })
    }

    // Todos :: Show and hide password and Password validation

    return (
        <div>
            <div className='flex h-screen'>
                <div className='flex flex-col bg-white w-8/12 items-center justify-center'>
                    <h1 className='text-5xl font-bold text-center mb-10 text-[#F0BE61]'>Login to your account</h1>
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
                        <div className='mt-5'>
                            <input type="submit" className='btn btn-md btn-info px-10' value="login" />
                        </div>
                        
                    </Form>
                </div>
                <div className='flex flex-col gap-10 px-10 text-white bg-[#f0be61] w-4/12 text-center justify-center items-center'>
                    <h1 className='text-5xl font-bold'>New Here ?</h1>
                    <p>Sign up and discover a great amount of new opportunities</p>
                    <Link to='/signup' className='btn border-none rounded-md btn-info w-40'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;