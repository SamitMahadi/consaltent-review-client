import React from 'react';
import { Link } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa'

const Login = () => {
    return (
        <div className='mt-20 mb-20'>
            <div className='form-container w-1/2 h-96 bg-white border-2 border-red-700 rounded-lg	m-auto pl-12 max-h-screen'>
                <h2 className='form-title text-3xl font-normal leading-10 text-center'>Login</h2>
                <form>
                    <div className="form-control mb-5">
                        <label className='block font-normal text-xl mb-2' htmlFor="email">Email</label>
                        <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="email" name='email' required />
                    </div>

                    <div className="form-control mb-5">
                        <label className='block font-normal text-xl mb-2' htmlFor="password">Password</label>
                        <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="password" name='password' required />
                    </div>
                    <input className='btn-submit w-24 h-12 bg-red-700 rounded-lg font-normal leading-10 text-white ' type="submit" name="" id="" value='Login' />
                    <button className="btn btn-square btn-outline ml-3 ">
                    <FaGoogle className='w-4 h-4'></FaGoogle>   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </button>
                </form>
                <p className='pt-5'>New to Qian?<Link className='text-red-700' to=''>create a new account</Link></p>
            </div>
        </div>
    );
};

export default Login;