import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    return (
        <div className='bg-white md:bg-[#FFE475] h-[
            102px] px-[25px] py-5 flex justify-between items-center'>

            <h1 className='text-[#100E3A] text-3xl font-bold'>E-Commerce</h1>


            <div className='w-[77px] h-[34px] px-[5px] py-5 bg-white rounded-full flex justify-center items-center gap-[5px]'>
                <FiShoppingCart className='w-8 h-6=5 text-[#100E3A]' />
            </div>


        </div>
    );
};

export default Header;