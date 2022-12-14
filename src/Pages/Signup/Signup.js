import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Signup = () => {
    const [error,setError]= useState('')
    
    const {createUser}= useContext(AuthContext)
    const handleSubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL =form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);


        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            setError('')
            form.reset()
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
    }
    useTitle('signup')
    return (
    <div className='mt-20 mb-20'>
        <div className='form-container w-1/2 h-auto bg-white border-2 border-red-700 rounded-lg	m-auto pl-12 '>
            <h2 className='form-title text-3xl font-normal leading-10 text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control mb-5">
                    <label className='block font-normal text-xl mb-2' htmlFor="email">Your Name</label>
                    <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='name' />
                </div>
                <div className="form-control mb-5">
                    <label className='block font-normal text-xl mb-2' htmlFor="email">Photo Url</label>
                    <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='photoURL'  />
                </div>
                <div className="form-control mb-5">
                    <label className='block font-normal text-xl mb-2' htmlFor="email">Email</label>
                    <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="email" name='email' required />
                </div>

                <div className="form-control mb-5">
                    <label className='block font-normal text-xl mb-2' htmlFor="password">Password</label>
                    <input className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="password" name='password' required />
                </div>
                <input className='btn-submit w-24 h-12 bg-red-700 rounded-lg font-normal leading-10 text-white ' type="submit" name="" id="" value='Signup' />
                
            </form>
            <p className='text-red-700'>{error}</p>
            <p className='pt-5 mb-5'>Already have an account?<Link className='text-red-700' to='/login'>Login now</Link></p>
        </div>
    </div>
    
    );
};

export default Signup;