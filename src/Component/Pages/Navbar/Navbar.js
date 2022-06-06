import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] =useAuthState(auth)
    console.log(user)
    const [open, setOpen] = useState(false);
    const logout=()=>{
        signOut(auth)
    }
    return (
        <section className='shadow-sm sticky top-0 div z-50'>
             
            <div className='md:flex  justify-between items-center p-5'>

                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <input className='shadow-inner font-bold border-b-2 border-pink-500 rounded-t-md p-2 focus:outline-none' placeholder='Search Product By Name' type="text" />
                        <button className='text-pink-500 p-2 shadow-md rounded '><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg></button>
                    </div>
                    <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                        <div>
                            <div className='bg-black w-5 h-1'></div>
                            <div className='bg-black w-5 h-1 mt-1'></div>
                            <div className='bg-black w-5 h-1 mt-1'></div>
                        </div>
                    </div>
                </div>
                <ul className={`md:flex div pl-5  mt-3 justify-end items-center absolute  md:static w-full duration-500 ease-in ${open ? 'right-0' : 'right-[1200px]'}`}>
                    <img className='w-15 h-14 mr-3 rounded-full' src={user?.photoURL} alt="" />
                    <p className='font-bold mr-5 block mb-2 bg-pink-300 px-2 rounded-sm'>{user?.displayName}</p>
                    <Link className='font-bold mr-5 block mb-2' to={'/home'}>Home</Link>
                    <Link className='font-bold mr-5 block mb-2' to={'/'}>Contact</Link>
                    <Link className='font-bold mr-5 block mb-2' to={'/dashboard'}>Dashboard</Link>
                    <Link className=' text-pink-400 mr-5 mb-2' to={'/user'}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                    <Link className='text-pink-400 mr-5 mb-2' to='/cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>
                    {
                        user? <button onClick={logout} className='font-bold mr-5 block mb-2'>Log out</button> : <Link className='font-bold mr-5 block mb-2' to={'/login'}>Login</Link>
                    }
                </ul>
            </div>
            <hr></hr>
           
        </section>
    );
};

export default Navbar;