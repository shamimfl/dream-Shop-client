import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MobailPhones = () => {
const handleAddphone=e=>{
    e.preventDefault()
    const brand =e.target.brand.value;
    const img =e.target.img.value;
    const name =e.target.name.value;
    const price =e.target.price.value;
    const data ={brand , name , price, img}
    console.log(data)
    const url =`https://shrouded-gorge-42076.herokuapp.com/phones`
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
    return (
        <div className='p-5'>
            <h1 className='text-xl font-bold text-pink-400'>Mobaile Phones </h1>
            <div className='flex justify-center mb-5 mt-10 border-pink-400 text-pink-400'>

                <div class="tabs flex items-center">
                    <Link className='font-semibold mr-5 border-b-2 border-pink-400' to='/home/symphony'>SymPhony</Link>
                    <Link className='font-semibold mr-5 border-b-2 border-pink-400' to='/home/xiaomi'>Xiaomi</Link>
                    <Link className='font-semibold mr-5 border-b-2 border-pink-400' to='/home/samgsung'>SamSung</Link>
                    <label for="my-modal" class="text-xl bg-pink-400 text-white px-4 rounded font-bold text- modal-button">+</label>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <form onSubmit={handleAddphone} class="modal-box relative">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <select  className='block p-2 border-b-2 border-pink-400 w-full focus:outline-none' name="brand" id="">
                        <option  value="Symphony">Symphony</option>
                        <option  value="Samgsung">Samgsung</option>
                        <option  value="Xiaomi">Xiaomi</option>
                    </select>
                    <input name='name' className='block p-2 border-b-2 border-pink-400 w-full focus:outline-none' type="text" placeholder='Phone Name' />
                    <input name='price' className='block p-2 border-b-2 border-pink-400 w-full focus:outline-none'  type="number" placeholder='Phones Price'/>
                    <input name='img' className='block p-2 border-b-2 border-pink-400 w-full focus:outline-none'  type="text" placeholder='img url'/>
                    <input type="submit" className='w-full bg-pink-400 text-white font-bold rounded-md mt-5 cursor-pointer' value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default MobailPhones;