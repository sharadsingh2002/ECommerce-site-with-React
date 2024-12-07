import React, { useEffect, useState, useContext } from 'react'
import UseFetch from '../../UseFetch.jsx'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import support from '../../Footage/24-7.png'
import { CartContext } from '../CartContext/CartContext.jsx';
import { useNavigate } from 'react-router-dom';


function Category() {

    const navigate = useNavigate()

    const [allCategory, setAllCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [isloding, setIsloding] = useState(true)
    const { incrementCartCount } = useContext(CartContext);

  
    const { data } = UseFetch('https://dummyjson.com/products')
    const { data: category } = UseFetch('https://dummyjson.com/products/category-list')
    const { data: categoryName } = UseFetch(selectedCategory ? `https://dummyjson.com/products/category/${selectedCategory}` : null);



    useEffect(() => {
        if (data && data.products) {
            setAllCategory(data.products)
            setIsloding(false)
        }
    }, [data])


    useEffect(() => {
        if (selectedCategory) {
            setIsloding(true);
        }
    }, [selectedCategory]);


    useEffect(() => {
        if (categoryName && categoryName.products) {
            setAllCategory(categoryName.products)
            setIsloding(false)
        }
    }, [categoryName])

    let productsHandler = (item) => {
        setSelectedCategory(item)
    }

    let viewProductDetails = (itemId) => {
        navigate(`/product/${itemId}`);
    };

    return (

        <>
            <div className='flex flex-col h-full w-[90%] md:w-[80%] m-auto mt-20 gap-3 '>
                <h1 className='m-auto font-bold text-2xl md:text-3xl'>New Product Arrived</h1>

                {isloding && (
                    <img
                        src="https://media.tenor.com/hQz0Kl373E8AAAAi/loading-waiting.gif"
                        alt="Loading..."
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 z-50"
                    />
                )}

                <div className='flex flex-col lg:flex-row gap-4 mt-6  sticky '>
                    <div className='lg:sticky top-20 h-full w-[80%] m-auto lg:m-0 lg:w-1/4 border p-4 flex flex-col gap-3 rounded-lg'>
                        <span className='mb-2 font-bold'>CATEGORY</span>
                        {category && category.slice(0,20).map((item, index) => (
                            <p key={index} onClick={() => productsHandler(item)} className='text-gray-500 font-mono cursor-pointer px-2 transition duration-150 ease-in-out hover:rounded-md hover:text-white hover:bg-[#385A64]'
                            >
                                {item.toUpperCase()}
                            </p>
                        ))}

                    </div>

                    <div className='flex flex-wrap justify-center  gap-4 w-full'>
                        {allCategory && allCategory.map((item) => (
                            <div key={item.id} className=' flex flex-col justify-center p-4 h-72 w-44 xl:w-56 rounded-lg shadow-md border hover:shadow-2xl ' >
                                <img onClick={() => viewProductDetails(item.id)} className='cursor-pointer w-full h-36 sm:h-40 object-contain rounded-md' src={item.thumbnail} alt={item.title} />
                                <div className='h-24 flex flex-col justify-between mt-1'>
                                    <p className='text-sm text-[#FF735C] font-semibold'>{item.category.toUpperCase()}</p>
                                    <h3 className='text-sm sm:text-base font-semibold'>
                                        {item.title.split(' ').slice(0, 3).join(' ')}...
                                    </h3>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='text-lg font-semibold text-green-600'>${item.price}</h1>
                                        <ShoppingCartIcon onClick={()=> incrementCartCount(item)} className="cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                        <img src={support} alt="Hero" className="h-6" />
                    </div>
                    <h3 className="font-semibold text-lg">Support 24/7</h3>
                    <p className="text-gray-500">Contact us 24 hours a day, 7 days a week</p>
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
};




export default Category