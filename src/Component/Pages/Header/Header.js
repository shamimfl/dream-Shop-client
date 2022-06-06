import React from 'react';

const Header = () => {
    const date =new Date()
    const day =date.getDate()
    const month =date.getMonth()
    const year =date.getFullYear();
    return (
       <section>
        <h1 className='title text-3xl font-bold text-center text-pink-500 p-3'>Dream Shop Dinajpur</h1>
       </section>
    );
};

export default Header;
