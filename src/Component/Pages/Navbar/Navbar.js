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
                    <p className='font-bold mr-5 block mb-2  rounded-sm'>{user?.displayName}</p>
                    <Link className='font-bold mr-5 block mb-2' to={'/home'}>Home</Link>
                    <Link className='font-bold mr-5 block mb-2' to={'/'}>Contact</Link>
                    <Link className='font-bold mr-5 block mb-2' to={'/dashboard'}>Dashboard</Link
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