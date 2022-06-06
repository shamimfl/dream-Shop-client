import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Electronics = () => {
    const navigate =useNavigate()
    const url = `https://shrouded-gorge-42076.herokuapp.com/electronics`
    const { isLoading, error, data, refetch } = useQuery('electronics', () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    
    const handleOrder=_id=>{
        navigate(`/manageorder/${_id}`)
    }
    return (
        <div className='p-5'>
            <span className='flex mt-5 mb-5 text-2xl font-bold items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-pink-400 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h1>Electronics</h1>
            </span>
            <div className='electronics gap-10 grid md:grid-cols-3 lg:grid-cols-4' >
                {
                    data.map(data =>
                        <div class="card  bg-base-100 shadow-md">
                            <figure><img className='h-60' src={data?.img} alt="Shoes" /></figure>
                            <div class="p-5">
                                <h2 class="font-bold text-xl text-center">{data?.productName}</h2>
                                   <div className='font-bold w-full mt-3'>
                                   <p className='block'>Price: {data?.price}৳</p>
                                    <p className='block'>Quentity: {data?.quentity}P</p>
                                   </div>
                                <div class="flex justify-between  mt-5">
                                    <button onClick={()=>handleOrder(data?._id)} class="bg-pink-400 shadow-md px-2 text-sm w-full font-bold text-white py-1 rounded-sm uppercase">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className='flex justify-end mt-10'>
            <button class="bg-pink-400 shadow-md px-2 text-sm font-bold text-white py-1 rounded-sm uppercase">see all</button>
            </div>
        </div>
    );
};

export default Electronics;