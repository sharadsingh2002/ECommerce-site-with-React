import React, { useContext } from 'react';
import UseFetch from '../../UseFetch';

import appleImg from '../../Footage/apple.png'
import vegs from '../../Footage/vegies.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { CartContext } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';

function NewProducts() {

    const navigate = useNavigate()

    const { data } = UseFetch('https://dummyjson.com/products/category/groceries');
    const { incrementCartCount } = useContext(CartContext);

    const viewProductDetails = (itemId) => {
        navigate(`/product/${itemId}`);
    };

    return (
        <>

            <div className='flex flex-col w-full md:w-[80%] m-auto mt-4 mb-8'>

                <div class="rounded-sm mb-5 bg-[#FF735C] text-white text-center h-12 flex items-center justify-between px-4 md:px-0 md:ps-4 w-[80%] m-auto overflow-hidden">
                    <img src={appleImg} alt="Deal Image" class=" hidden md:flex md:h-8 lg:h-11 object-cover rounded" />
                    <div className='space-x-2 md:space-x-4 m-auto'>
                        <span class="font-bold text-xs sm:text-sm md:text-lg">HOT DEALS FOR THIS WEEK</span>
                        <span class="font-bold text-yellow-300 text-xs sm:text-sm md:text-lg">SAVE UP TO 50% OFF</span>
                    </div>
                    <img src={vegs} alt="Deal Image" class="hidden md:flex md:w-44 mb-14  object-cover " />
                </div>


                <div className='flex flex-wrap justify-center gap-2 sm:gap-4 w-full '>
                    {data?.products && data.products.map((item) => (
                        <div key={item.id} className='flex flex-col justify-center p-4 h-72 w-44 xl:w-56 rounded-lg shadow-md border hover:shadow-2xl '>
                            <img onClick={() => viewProductDetails(item.id)} className='cursor-pointer w-full h-40 object-contain rounded-md' src={item.thumbnail} alt={item.title} />
                            <div className='h-24 flex flex-col justify-between mt-1'>
                                <p className='text-sm text-[#FF735C] font-semibold'>{item.category.toUpperCase()}</p>
                                <h3 className='text-sm sm:text-base font-semibold'>
                                    {item.title.split(' ').slice(0, 3).join(' ')}...
                                </h3>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-lg font-semibold text-green-600'>${item.price}</h1>
                                    <ShoppingCartIcon onClick={() => incrementCartCount(item)} className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="w-[80%] m-auto flex flex-col sm:flex-row justify-between items-center bg-white p-4 sm:p-8 mt-20 mb-5">
                <div className="flex flex-col items-center text-center m-2">
                    <div className="text-3xl mb-2">
                        <LocalShippingIcon />
                    </div>
                    <h3 className="font-semibold text-lg">Free Shipping</h3>
                    <p className="text-gray-500">Free shipping on orders over $100</p>
                </div>


                <div className="flex flex-col items-center text-center m-2">
                    <div className="text-3xl mb-2">
                        <AssuredWorkloadIcon />
                    </div>
                    <h3 className="font-semibold text-lg">Secure Payment</h3>
                    <p className="text-gray-500">We ensure secure payment with PEV</p>
                </div>

                <div className="flex flex-col items-center text-center m-2">
                    <div className="text-3xl mb-2">
                        <RefreshOutlinedIcon />
                    </div>
                    <h3 className="font-semibold text-lg">30 Days Return</h3>
                    <p className="text-gray-500">Simply return it within 30 days for an exchange</p>
                </div>
            </div>
        </>

    );
}

export default NewProducts;
