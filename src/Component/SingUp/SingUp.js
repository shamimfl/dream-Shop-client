import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const SingUp= () => {
    const navigate =useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        createUserWithEmailAndPassword (data.email , data.password)
        console.log(data)
    };

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate('/update')
        console.log(user)

    }


    return (
        <div className='flex justify-center mt-10 p-5'>
            <div className='lg:w-2/5  p-5 shadow-lg shadow-slate-200 rounded-md'>
                <h1 className='text-center font-bold text-pink-400'>Sing Up</h1>
                <p className='text-red-400 font-semibold'>{error ? <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error.message}
                </span> : ''}</p>
                <span className='flex justify-center mt-5 mb-5'>
                    <img className='h-10 w-10 mx-5  border-2 border-pink-400 rounded-full cursor-pointer' src="https://img.icons8.com/fluency/2x/facebook-new.png" alt="" />
                    <img className='h-10 w-10 mx-5 border-2 border-pink-400 rounded-full cursor-pointer' src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" />
                </span>
                <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                    <input type='email' {...register("email", { required: true })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter Your Email' />
                    <input type='password' {...register("password", { required: true })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter passwprd'/>
                    {errors.exampleRequired && <small className='text-red-400 font-serif font-semibold'>This field is not required</small>}
                    <span className='flex justify-center'><input className='block rounded-md cursor-pointer text-white font-bold uppercase px-4 py-1 bg-pink-400' type="submit" /></span>
                    </form>
                    <span>
                        <Link className='block font-semibold  text-pink-400' to='/login'>All ready have an account</Link>
                    </span>
            </div>
        </div>
    );
};

export default SingUp;