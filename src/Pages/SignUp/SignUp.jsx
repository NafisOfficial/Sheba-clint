
import { Form, Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex h-screen'>
            <div className='flex flex-col bg-[#f0be61] w-8/12 items-center justify-center'>
                <h1 className='text-5xl font-bold text-center mb-10 text-white'>Signup to your account</h1>
                <Form action="" className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Name</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full w-[300px]" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full w-[300px]" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full w-[300px]" />
                    </div>
                    <div>
                        <input type="submit" className='btn btn-md px-10 bg-white' value="Sign Up" />
                    </div>
                </Form>
            </div>
            <div className='flex flex-col gap-10 px-5 bg-white text-[#F0BE61]  w-4/12 text-center justify-center items-center'>
                <h1 className='text-5xl font-bold'>Have an account ?</h1>
                <p>If you already have na account you have to login</p>
                <Link to='/login' className='btn border-none rounded-md bg-white w-40 bg-[#f0be61]'>Login</Link>
            </div>
        </div>
    );
};

export default SignUp;