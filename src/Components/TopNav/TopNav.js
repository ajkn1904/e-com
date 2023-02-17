import React from 'react';

const TopNav = ({ data }) => {
    return (
        <div className='md:hidden flex gap-[15px] whitespace-nowrap overflow-auto scrollbar-hide border-b ml-7'>
            {
                data.map(categories =>
                    <div key={categories.cat_id} className='rounded-md text-[#737D94] active:text-[#5DA9E9] hover:text-[#5DA9E9]' >
                       
                       
                        <div className='bg-[#EDEDED] active:bg-[#5DA9E9] active:content-white h-12 w-12 rounded-[5px] flex items-center justify-center'>

                            <img title={categories.category} src={categories.category_img} alt={categories.category} className='w-[19.16px] h-[19.16px]' />

                        </div>


                        <p title={categories.category} className='w-12 truncate font-extrabold text-xs mt-[5px] mb-[15px]'>{categories.category}</p>


                    </div>
                )}
        </div>
    );
};

export default TopNav;