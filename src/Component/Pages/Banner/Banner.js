import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



const Banner = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">'  + "</span>";
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='lg:flex items-center justify-between p-6'>
                    <img  className='h-96 ' src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png" alt="" />
                    <div className=''>
                        <h3 className='text-4xl font-bold '><span className='text-pink-600'>50 % Off</span> For Your Frist Shopping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button className='btn lg:mt-5 bg-pink-400 border-0'>Visite now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='lg:flex items-center justify-between p-6'>
                    <img  className='h-96' src="https://freepngimg.com/thumb/sunglass/26652-9-women-sunglass.png" alt="" />
                    <div className=''>
                        <h3 className='text-4xl font-bold '><span className='text-pink-600'>50 % Off</span> For Your Frist Shopping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button className='btn lg:mt-5 bg-pink-400 border-0'>Visite now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='lg:flex items-center justify-between p-6'>
                    <img  className='h-96' src="https://freepngimg.com/thumb/gift/135279-blue-birthday-present-png-download-free.png" alt="" />
                    <div className=''>
                        <h3 className='text-4xl font-bold '><span className='text-pink-600'>50 % Off</span> For Your Frist Shopping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button className='btn lg:mt-5 bg-pink-400 border-0'>Visite now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='lg:flex items-center justify-between p-6'>
                    <img  className='h-96' src="https://freepngimg.com/thumb/watch/74651-chronograph-watch-baselworld-speake-marin-j12-chanel.png" alt="" />
                    <div className=''>
                        <h3 className='text-4xl font-bold '><span className='text-pink-600'>50 % Off</span> For Your Frist Shopping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button className='btn lg:mt-5 bg-pink-400 border-0'>Visite now</button>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;