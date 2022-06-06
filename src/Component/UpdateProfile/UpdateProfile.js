import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';




const UpdateProfile = () => {
    const navigate =useNavigate()
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        updateProfile({ displayName: data.name, phoneNumber: data.phoneNumber, photoURL: data.photoURL })
        console.log(data)
    };
    if (updating) {
        return <Loading></Loading>
    }
    if(!error){
        navigate('/')
    }


    return (
        <div className='flex justify-center mt-10 p-5'>
            <div className='lg:w-2/5  p-5 shadow-lg shadow-slate-200 rounded-md'>
                <h1 className='text-center font-bold text-pink-400'>Update Your Profile</h1>
                <p className='text-red-400 font-semibold'>{error ? <span className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error.message}
                </span> : ''}</p>
                <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register("name", { required: true })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter Your name' />
                    <input type='text' {...register("photoURL", { required: false })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter img-url(optional)' />
                    <input type='number' {...register("phone", { required: true })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter your phone number' />
                    {errors.exampleRequired && <small className='text-red-400 font-serif font-semibold'>This field is not required</small>}
                    <span className='flex justify-center'><input className='block rounded-md cursor-pointer text-white font-bold uppercase px-4 py-1 bg-pink-400' type="submit" /></span>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;