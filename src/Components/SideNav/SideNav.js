import React from 'react';

const SideNav = ({data}) => {


    return (
        //<div className='hidden md:block w-[247px]'>
        <div className='hidden md:block  w-[247px] h-[79vh] scrollbar-thin scrollbar-thumb-[#5DA9E9] scrollbar-track-[#EDEDED] overflow-y-scroll scrollbar-thumb-rounded-full mt-[21px] top-28'>
            {
            data.map(categories => <button key={categories.cat_id} className='w-[207px] h-[42px] text-[#737D94] text-left bg-white hover:bg-[#5DA9E9] hover:text-white active:bg-[#5DA9E9] active:text-white border-0 px-[10px] py-10 ml-5 mr-[19.81px] my-[10px] flex justify-start items-center text-base font-extrabold rounded-[10px] transition-colors duration-200 ease-in-out'>{categories.category}</button>)
            }
        </div>
    );
};

export default SideNav;