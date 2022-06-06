import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Decoration = () => {
    const navigate =useNavigate()
    const url = `http://localhost:5000/decoration`
    const { isLoading, error, data, refetch } = useQuery('decoration', () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()
    const handleOrder=_id=>{
        navigate(`/manageorder/${_id}`)
    }
    return (
        <div className='p-5 mt-10'>
            <span className='flex mt-5 mb-5 text-2xl font-bold items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-pink-400 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <h1>Decoration</h1>
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

export default Decoration;