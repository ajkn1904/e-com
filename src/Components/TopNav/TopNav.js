import React, { useState } from 'react';
import '../btnStyle.css';


const TopNav = ({ data }) => {

    const [isActive, setIsActive] = useState({});

    const handleClick = id => {
        setIsActive(prevActiveButtons => ({
            [id]: !prevActiveButtons[id]
        }));
    };




    return (
        <div className='md:hidden flex gap-[15px] whitespace-nowrap overflow-auto scrollbar-hide ml-7 mb-[15px]'>
            {
                data.map(categories =>
                    <div key={categories.cat_id} title={categories.category} className='rounded-md text-[#737D94] hover:text-[#5DA9E9]'>
                        <a href={`#${categories.cat_id}`}
                            onClick={() => handleClick(categories.cat_id)}>

                            <div className={`bg-[#EDEDED] hover:bg-[#5DA9E9] active:content-white h-12 w-12 rounded-[5px] flex items-center justify-center ${isActive[categories.cat_id] ? 'active' : ''}  shadow-md `}>

                                <img src={categories.category_img} alt={categories.category} className='w-[19.16px] h-[19.16px]' />

                            </div>


                            <p className={`w-12 truncate font-extrabold text-xs my-[5px] mt-[5px] ${isActive[categories.cat_id] ? 'text-[#5DA9E9]' : ''} `}>{categories.category}</p>

                        </a>



                    </div>
                )}
        </div>
    );
};

export default TopNav;