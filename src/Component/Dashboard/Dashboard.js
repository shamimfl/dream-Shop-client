import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white'>
            <div className='flex justify-between items-center mt-10 mb-10 p-2'>
                <h1 className='title text-2xl text-center   text-pink-500 font-semibold'>Wellcome to your Dashbord</h1>
                <label for="my-drawer-2" class=" btn bg-pink-400 border-0 drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg></label>
            </div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <Link to='/dashboard/addproduct' className='text-slate-600 uppercase font-bold'>Add product</Link>
                        <Link to='/dashboard/mycart' className='text-slate-600 uppercase font-bold'>My cart</Link>
                        <Link to='/dashboard/addreviue' className='text-slate-600 uppercase font-bold'>Add reviue</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;