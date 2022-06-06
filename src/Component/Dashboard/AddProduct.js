import React from 'react';


const AddProduct = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const type = e.target.type.value;
        const productName = e.target.productName.value;
        const price = e.target.price.value;
        const quentity = e.target.quentity.value;
        const img = e.target.img.value;
        const shop = e.target.shop.value;
        const data = {type, price, productName, quentity, img, shop}
        const url =`https://shrouded-gorge-42076.herokuapp.com/product`
        fetch(url,{
            method: "POST",
            headers :{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        e.target.reset()
        // console.log(data)
    };


    return (
        <div className='flex justify-center '>
            <form className='p-5 lg:w-2/4 shadow-md' onSubmit={handleSubmit}>
                <h1 className='text-center text-pink-400 text-xl font-bold'>Add product</h1>
                <select name="type" className='p-2 w-full border-b-2 focus:outline-none font-bold'>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="decoration">Decoration</option>
                </select>
                <input type='text' required name='shop'  className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Shop Name' />
                <input type='text' required name='productName'  className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Product Name' />

                <input type='number' required name='price' className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Enter Price' />

                <input type='number' required name='quentity' className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Quentity' />

                <input type='text' required name='img' className='p-2 shadow border-b-2 border-pink-400 focus:outline-none font-bold shadow-slate-200 block w-full mb-5' placeholder='Img URL' />

                <span className='flex justify-center'><input className='block rounded-md cursor-pointer text-white font-bold uppercase px-4 py-1 bg-pink-400' type="submit" /></span>
            </form>
        </div>
    );
};

export default AddProduct;