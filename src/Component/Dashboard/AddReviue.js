import React from 'react';
import { useForm } from 'react-hook-form';

const AddReviue = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const url =`https://shrouded-gorge-42076.herokuapp.com/reviue`
        fetch(url,{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
    };



    return (
        <div className='flex justify-center'>
            <form className='p-5 shadow-md lg:w-2/4' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register("name", { required: true })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter Your Name' />
                <input type='Email' {...register("email", { required: true })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter your Email' />
                <textarea type='text' {...register("comment", { required: true })} className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Comment' />

                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                {errors.exampleRequired && <small className='text-red-400 font-serif font-semibold'>This field is not required</small>}
                <span className='flex justify-center'><input className='block rounded-md cursor-pointer text-white font-bold uppercase px-4 py-1 bg-pink-400' type="submit" /></span>
            </form>
        </div>
    );
};

export default AddReviue;