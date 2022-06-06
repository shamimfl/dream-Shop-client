import React from 'react';

const Header = () => {
    const date =new Date()
    const day =date.getDate()
    const month =date.getMonth()
    const year =date.getFullYear();
    return (
       <section>
        <div className='flex'>
        <button className='px-5   font-bold text-white py-2 bg-pink-400'>{day}/{month}/{year}</button>
        <marquee className='px-5 py-3 bg-s  font-bold text-white' behavior="" direction="">Wellcome to Shamim's E-comers website</marquee>
        </div>
        <h1 className='title text-3xl font-bold text-center text-pink-500 p-3'>Dream Shop Dinajpur</h1>
       </section>
    );
};

export default Header;
