import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { data } from 'autoprefixer';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Discount = () => {
    const handleadditem= e =>{
        e.preventDefault();
        const img =e.target.img.value;
        const name =e.target.name.value;
        const price = e.target.price.value;
        const data ={img, name, price}
        const url =`https://shrouded-gorge-42076.herokuapp.com/discount`
        fetch(url,{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        e.target.reset()
    }

    // fetch discount data 
    const url =`https://shrouded-gorge-42076.herokuapp.com/discount`
    const { isLoading, error, data, refetch } = useQuery('discount', () => fetch(url).then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    refetch();
    return (
        <div className='p-10'>
            <div className='text-2xl font-bold mt-5 mb-5 flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-5 text-pink-400 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <h1 >Super Discount</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    data.map(data=> <SwiperSlide className='mb-10 shadow-md rounded-md overflow-hidden  font-semibold text-pink-500'>
                        {/* <p className='text-sm bg-yellow-200'>20% off</p> */}
                        <img className='h-60 mb-2 w-full' src={data?.img} alt="" />
                        <div className='p-5'>
                        <p>{data?.price}</p>
                        <p>{data?.name}</p>
                        </div>
                        </SwiperSlide>)
                }
                
                <SwiperSlide>
                    <label for="my-modal-3" class="cursor-pointer modal-button"><img className='h-60 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" alt="" /> </label>
                </SwiperSlide>
            </Swiper>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-center text-pink-400 text-xl  font-bold'>Add Information</h1>
                    <form onSubmit={handleadditem}>
                        <input className='p-2 focus:outline-none border-b-2 border-pink-400 w-full' type="text" name="img" id="" placeholder='Enter img URL' />
                        <input className='p-2 focus:outline-none border-b-2 border-pink-400 w-full' type="text" name="name" id=""  placeholder='Enter Product Name'/>
                        <input  className='p-2 focus:outline-none border-b-2 border-pink-400 w-full' type="number" name="price" id="" placeholder='Enter Price' />
                        <div className='flex justify-center mt-5'> 
                        <input className='bg-pink-400 font-bold cursor-pointer px-3 py-2 rounded-md text-white' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Discount;