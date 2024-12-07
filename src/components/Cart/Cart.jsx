import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



function Cart() {
    const { addToCartCount, setAddToCartCount } = useContext(CartContext);
    const [quantities, setQuantities] = useState(addToCartCount.map(() => 1))
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalPrice = addToCartCount.reduce((sum, item, index) => sum + item.price * quantities[index], 0);


    const decrement = (index) => {
        setQuantities(prevQuantities =>
            prevQuantities.map((qty, i) => (i === index ? Math.max(qty - 1, 1) : qty))
        );
    }

    const increment = (index) => {
        setQuantities(prevQuantities =>
            prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
        );
    }

    const removeItem = (index) => {
        if (setAddToCartCount) {
            setAddToCartCount((prevItems) => prevItems.filter((_, i) => i !== index));
            setQuantities((prevQuantities) => prevQuantities.filter((_, i) => i !== index));
        }
    };

    const handleCheckout = () => {
        setOrderPlaced(true)
        setAddToCartCount([])
        setQuantities([])
    }




    if (orderPlaced) {
        return (
            <div className="text-center my-24">
                <CheckCircleIcon className="text-green-500 mb-3" style={{ fontSize: '40px' }} />
                <h1 className="text-3xl font-bold">Order Placed!</h1>
                <p className="text-lg text-gray-500 mt-2 ">Thank you for your purchase.</p>
            </div>
        )
    }

    return (
        <div className='my-5 flex items-start justify-between flex-col w-full  md:w-[70%] md:flex-row m-auto gap-5 '>

            <div className='h-auto w-[90%] m-auto md:w-[70%] p-3 '>

                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
                    <p className='text-2xl font-semibold'>{addToCartCount.length} Items</p>
                </div>

                <div className="w-full h-[0.5px] bg-gray-300 mt-6 m-auto"></div>

                <div className='w-full flex justify-between items-center mt-6 '>
                    <p className='text-xs md:text-sm font-semibold text-gray-500'>PRODUCT DETAILS</p>
                    <div className='flex gap-8 md:gap-52 '>
                        <p className='text-xs md:text-sm font-semibold text-gray-500'>QUANTITY</p>
                        <p className='text-xs md:text-sm font-semibold text-gray-500'>PRICE</p>
                    </div>
                </div>


                <div className='w-full flex flex-col items-center my-4'>
                    {addToCartCount.length > 0 ? (
                        addToCartCount.map((item, index) => (
                            <div key={index} className=' w-full h-auto flex items-center justify-between my-4 '>
                                <div className='flex gap-1 md:gap-4 '>
                                    <img className=' w-20 md:w-24' src={item.thumbnail} alt={item.name} />
                                    <div>
                                        <p className='text-xs md:text-sm font-bold'>{item.title}</p>
                                        <p className='text-sm mt-1'>{item.description.split(" ").slice(0, 2).join(' ')}...</p>
                                        <button className='mt-4 bg-[#FF735C] px-2 text-xs md:text-sm text-center text-white' onClick={() => removeItem(index)}>Remove</button>
                                    </div>

                                </div>
                                <div className='flex justify-between items-center w-32 md:w-80 '>
                                    <div className='flex gap-2  md:gap-4 '>
                                        <button className='text-sm md:text-xl font-semibold' onClick={() => decrement(index)}>-</button>
                                        <div className='h-6 w-6 md:h-8 md:w-8 border text-xs flex items-center justify-center'>{quantities[index]}</div>
                                        <button className='text-sm md:text-xl font-semibold' onClick={() => increment(index)}>+</button>
                                    </div>
                                    <p className='text-xs font-bold text-gray-500'>${(item.price * quantities[index]).toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No items in cart</p>
                    )}
                </div>
            </div>


            <div className='md:h-96 md:w-[30%] w-[90%] m-auto bg-[#F5F5F6] py-3 px-4'>

                <h1 className='text-2xl font-semibold'>Order Summary </h1>
                <div className="w-full h-[0.5px] bg-gray-300 mt-6 m-auto"></div>
                <p className='text-sm font-semibold text-gray-500 w-full flex justify-between items-center mt-6'>Items {addToCartCount.length}</p>

                <div className='mt-8'>
                    <p className='text-sm font-semibold'>SHIPPING</p>
                    <button className='w-full h-8 border mt-3 text-sm bg-white'>Standard Delhivery - $5.00</button>
                </div>

                <div className="w-full h-[0.5px] bg-gray-300 mt-6 m-auto"></div>

                <div className='flex justify-between items-center mt-5'>
                    <p className='font-semibold'>Total Cost</p>
                    <p className='font-semibold'>${totalPrice.toFixed(2)}</p>
                </div>

                <button onClick={handleCheckout} className='w-full h-11 border mt-3 text-sm bg-[#111827] hover:bg-[white] hover:text-[#111827] hover:transition-all text-white'>Place Order</button>
            </div>
        </div>
    );
}

export default Cart;