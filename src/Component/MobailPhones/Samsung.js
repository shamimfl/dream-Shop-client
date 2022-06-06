import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Samsung = () => {
    const url =`https://shrouded-gorge-42076.herokuapp.com/samgsung`
    const { isLoading, error, data, refetch } = useQuery('samgsung', () => fetch(url).then(res => res.json()))
    refetch()
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 mt-20 '>
           {
               data.map(phone=> 
               <div className='w-full p-5 shadow-md rounded-md'>
                   <img src={phone?.img} alt="" />
                   <p className='font-bold text-pink-500'>Model:{phone?.name}</p>
                   <p className='font-bold text-pink-500'>Price{phone?.price}</p>
                   <input type="submit" className='w-full bg-pink-400 text-white font-bold rounded-md mt-5 cursor-pointer p-2' value="Buy Now " />
               </div>
               )
           }
        </div>
    );
};

export default Samsung;