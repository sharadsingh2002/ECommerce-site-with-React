import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import UseFetch from '../../UseFetch';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { incrementCartCount } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { data } = UseFetch(`https://dummyjson.com/products/${id}`);

    useEffect(() => {
        if (data) {
            setProduct(data);
            setLoading(false);
        }
    }, [data]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='flex flex-col md:flex-row justify-between w-[80%] m-auto mt-8 mb-6  gap-5 '>

            <img className=' bg-[#F7F7F7] rounded-xl h-80 md:h-96 ' src={product.thumbnail} alt={product.title} />

            <div className='flex flex-col w-full md:w-[60%]  gap-7 px-4 '>

                <h1 className='text-4xl font-bold'>{product.title}</h1>

                <div className='flex flex-col gap-3'>
                    <div className="w-4/5 h-[0.5px] bg-gray-300  "></div>
                    <h2 className='text-3xl flex gap-8 items-center'>${product.price} <p className='text-xl'>{product.discountPercentage} Off</p> </h2>
                    <div className="w-4/5 h-[0.5px] bg-gray-300  "></div>
                </div>

                <div>
                    <p className='font-bold text-xl'>Description</p>
                    <p>{product.description}</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='text-[13px]'> <PlaylistAddCheckCircleIcon /> {product.warrantyInformation}</p>
                    <p className='text-[13px]'> <RecyclingIcon /> {product.shippingInformation}</p>
                    <p className='text-[13px]'> <CreditCardIcon /> Cash on Delivery available</p>
                </div>

                <button  onClick={()=> incrementCartCount(product)} className="rounded w-28 h-9 mt-4 bg-[#385A64] text-white hover:bg-white hover:border-[#385A64] border hover:text-black transition duration-300 ease-in-out">
                    Add To Cart
                </button>
            </div>

        </div>
    );
};

export default ProductDetails;
