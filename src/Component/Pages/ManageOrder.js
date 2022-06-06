import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const ManageOrder = () => {
    const [user, loading, errors]=useAuthState(auth)
    const [quentity, setQuentity] = useState(1)
    const { _id } = useParams()
    const url = `https://shrouded-gorge-42076.herokuapp.com/manageorder/${_id}`
    const { isLoading, error, data, refetch } = useQuery('parts', () =>
        fetch(url).then(res =>
            res.json()
        )

    )
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    refetch()

    // 
    const incress = () => {
        setQuentity(quentity + 1)
    }
    const decress = () => {
        setQuentity(quentity - 1)
    }
    const placeOrder =e=>{
        e.preventDefault();
        const product = e.target.product.value;
        const name = e.target.name.value;
        const quentity = e.target.quentity.value;
        const price = e.target.price.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const data ={product, name, quentity, price, email, phone ,address }
        console.log(data)
        const url =`https://shrouded-gorge-42076.herokuapp.com/order`
        fetch(url,{
            method: "POST",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
    }
    return (
        <div className='bg-white lg:flex justify-around p-10'>
            <img className='h-96' src={data?.img} alt="" />
            <div className='mt-20 p-5 shadow-lg text-center'>
                <p className='text-xl font-semibold text-pink-400'>Product Name:{data?.productName}</p>
                <p className='text-xl font-semibold text-pink-400 text-left'>Price:{data.price} $</p>
                <p className='text-xl font-semibold text-pink-400 text-left'>Quentity :{data.quentity}</p>
                <div className='mt-5'>
                    <button onClick={decress} className={`bg-pink-500 px-10 rounded-l-full text-3xl text-white py-1 ${quentity == 1 ? 'btn-disabled' : ''}`}>-</button>
                    <span className='text-3xl px-3'>{quentity}</span>
                    <button onClick={incress} className={`bg-pink-500 px-10 rounded-r-full text-3xl text-white py-1 ${quentity == data.quentity ? 'btn-disabled' : ''}`}>+</button>
                </div>
                {/* <button  className='bg-pink-500 rounded px-5 mt-14  text-white py-1'>Book Now</button> */}
                <label for="my-modal-6" class="bg-pink-500 rounded px-5 mt-14  block text-white py-1 modal-button">Book Now</label>
            </div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div class="modal-action bg-red-400 p-2 rounded-full h-8 w-8 flex justify-center items-center ">
                        <label for="my-modal-6" class="font-bold ">X</label>
                    </div>
                    <form onSubmit={placeOrder}>
                        <input required className='block p-3 w-full border-b-2 border-pink-400 focus:outline-none font-bold' type="text" value={user?.displayName} name='name' placeholder='Enter your name ' />
                        <input required className='block p-3 w-full border-b-2 border-pink-400 focus:outline-none font-bold' type="text" name='product' value={data?.productName} placeholder='product name' />
                        <input required className='block p-3 w-full border-b-2 border-pink-400 focus:outline-none font-bold' type="number" name='phone' placeholder='phone number' />
                        <input required className='block p-3 w-full border-b-2 border-pink-400 focus:outline-none font-bold input-disabled'  type="email" value={user?.email} name='email' placeholder='Enter your Email' />
                        <input required className='block p-3 w-full border-b-2 border-pink-400 focus:outline-none font-bold ' type="address" name='address' placeholder='Enter your Address' />
                        <input required className='block p-3 w-full border-b-2 border-pink-400 focus:outline-none font-bold input-disabled' type="number" value={data.price * quentity } name='price' placeholder='price' />
                        <input required className='block p-3 w-full border-b-2 border-pink-400 focus:outline-none font-bold input-disabled' value={quentity} type="quentity" name='quentity' placeholder='quentity' />
                        <button type='submit' className='bg-pink-500 rounded px-5 mt-14  text-white py-1'>place order</button>
                     </form>

                </div>
            </div>
        </div>
    );
};

export default ManageOrder;