import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import { CartContext } from '../CartContext/CartContext';

const Header = () => {

    // const { addToCartCount } = useContext(CartContext);
    const { cartCount } = useContext(CartContext);

    return (

        <>
            <header className='flex w-full items-center justify-center h-10 bg-black'>
                <div className='m-auto flex w-full px-5 md:px-0 md:w-[70%] items-center justify-between '>
                    <p className='text-[10px] md:text-[14px] text-white'>Free shipping, 30-day return or refund guarantee.</p>
                    <div className='flex items-center gap-3'>
                        <span className='text-white text-[10px] md:text-[14px]'>
                            <EmailIcon /> support@example.com
                        </span>
                        <span className='text-white md:text-[14px] hidden md:flex'>FAQs</span>
                    </div>
                </div>
            </header>

            <nav className='w-full  shadow-lg'>

                <div className='flex w-full px-5 md:px-0  md:w-[80%] h-16 items-center justify-between m-auto '>
                    <h1 className='text-xl font-semibold'>4TrendMart</h1>

                    <div className='flex gap-5'>

                        <ul className='md:flex gap-5 font-medium text-lg hidden'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "underline text-[#C13C0B]" : "hover:underline"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/new-products"
                                    className={({ isActive }) =>
                                        isActive ? "underline text-[#C13C0B]" : "hover:underline"
                                    }
                                >
                                    Groceries
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) =>
                                        isActive ? "underline text-[#C13C0B]" : "hover:underline"
                                    }
                                >
                                    Cart
                                </NavLink>
                            </li>
                           
                        </ul>

                        <div className='relative'>
                            <ShoppingCartIcon />
                            <div className='text-[12px] absolute rounded-full h-5 w-5 bg-[#FF735C] -top-2 -right-2 flex items-center justify-center text-white '>
                                {cartCount}
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <section>
            </section>
        </>
    )
}

export default Header