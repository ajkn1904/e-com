import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Header = ({ itemCount }) => {
    return (
        <div className='bg-white md:bg-[#FFE475] h-[102px] px-[25px] py-5 flex justify-between items-center w-full'>

            <h1 className='text-[#100E3A] text-3xl font-bold'>E-Commerce</h1>


            <div className='w-[77px] h-[34px] px-[5px] py-5 bg-white rounded-full flex justify-center items-center gap-[5px] shadow-md'>
                <FiShoppingCart className='w-8 h-6 text-[#100E3A]' />
                <span className='font-extrabold text-[#000000] text-xs'>{itemCount}</span>
            </div>


        </div>
    );
};

export default Header;