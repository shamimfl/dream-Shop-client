import React from 'react';

const Service = () => {
    return (
        <section className='mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-20 p-5'>
            <div className='text-center swiper-div p-5'>
                <div className=' bg-slate-300 rounded-full overflow-hidden h-24 w-24 mx-auto items-center flex justify-center'>
                    <img className='h-20 w-20 p-3 ' src="https://img.icons8.com/windows/452/truck.png" alt="" />
                </div>
                <h1 className='font-semibold text-xl mt-5'>Worldwide Delivery</h1>
                <p className='mt-5 font-semibold text-slate-500'>We offer competitive prices on our 100 million plus product any range.</p>
            </div>

            <div className='text-center swiper-div p-5'>
                <div className=' bg-slate-300 rounded-full overflow-hidden h-24 w-24 mx-auto items-center flex justify-center'>
                    <img className='h-20 w-20 p-3 ' src="https://www.freeiconspng.com/thumbs/payment-icon/back-payment-icon-10.png" alt="" />
                </div>
                <h1 className='font-semibold text-xl mt-5'>Safe Payment</h1>
                <p className='mt-5 font-semibold text-slate-500'>We offer competitive prices on our 100 million plus product any range.</p>
            </div>

            <div className='text-center swiper-div p-5'>
                <div className=' bg-slate-300 rounded-full overflow-hidden h-24 w-24 mx-auto items-center flex justify-center'>
                    <img className='h-20 w-20 p-3 ' src="https://icon-library.com/images/happy-person-icon-png/happy-person-icon-png-22.jpg" alt="" />
                </div>
                <h1 className='font-semibold text-xl mt-5'>Shop With Confidence</h1>
                <p className='mt-5 font-semibold text-slate-500'>We offer competitive prices on our 100 million plus product any range.</p>
            </div>
            <div className='text-center swiper-div p-5'>
                <div className=' bg-slate-300 rounded-full overflow-hidden h-24 w-24 mx-auto items-center flex justify-center'>
                    <img className='h-20 w-20 p-3 ' src="https://www.iconpacks.net/icons/1/free-phone-support-icon-512-thumb.png" alt="" />
                </div>
                <h1 className='font-semibold text-xl mt-5'>24/7 Support</h1>
                <p className='mt-5 font-semibold text-slate-500'>We offer competitive prices on our 100 million plus product any range.</p>
            </div>
        </section>
    );
};

export default Service;