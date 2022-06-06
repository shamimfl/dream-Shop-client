import React from 'react';

const Catagory = () => {
    return (
        <section className='p-5 mt-20'>
            <div className='font-bold text-xl text-pink-40 uppercase flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
                </svg>
                <p>Catagory</p>
            </div>

            <div className='lg:grid grid-cols-3 gap-20 p-5'>
                <div class="card mt-10 h-60 shadow-xl image-full">
                    <figure><img src="https://us.123rf.com/450wm/kamenuka/kamenuka1903/kamenuka190300001/120630461-set-of-watercolor-dresses-on-hangers-fashion-illustration.jpg?ver=6" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Fashion</h2>
                        <small className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, in voluptate. Delectus cupiditate unde ex.</small>
                        <div class="flex justify-center items-end">
                            <button className='px-3 py-2 bg-pink-400 border-0 font-bold mt-5 rounded-md text-white'>Explore Now</button>
                        </div>
                    </div>
                </div>
                <div class="card mt-10 h-60 shadow-xl image-full">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeGTQGcZd5WZzPSuVjMJE9j94k18JTNCGnnUTAdcWShM3fwx6B3qLTgNy5aHI7apIr20&usqp=CAU" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Electronics</h2>
                        <small className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, in voluptate. Delectus cupiditate unde ex.</small>
                        <div class="flex justify-center items-end">
                            <button className='px-3 py-2 bg-pink-400 border-0 font-bold mt-5 rounded-md text-white'>Explore Now</button>
                        </div>
                    </div>
                </div>
                <div class="card h-60 mt-10 shadow-xl image-full">
                    <figure><img src="https://static-01.daraz.com.bd/p/2f211b8dde13909671bbf0b1934db824.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Decoration</h2>
                        <small className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, in voluptate. Delectus cupiditate unde ex.</small>
                        <div class="flex justify-center items-end">
                            <button className='px-3 py-2 bg-pink-400 border-0 font-bold mt-5 rounded-md text-white'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catagory;