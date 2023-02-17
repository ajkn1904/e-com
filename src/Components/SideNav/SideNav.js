import React, { useState } from 'react';
import '../btnStyle.css';

const SideNav = ({ data }) => {


    const [isActive, setIsActive] = useState({});

    const handleClick = (id) => {
        setIsActive(prevActiveButtons => ({
            [id]: !prevActiveButtons[id]
        }));
    };




    return (
        //<div className='hidden md:block w-[247px]'>
        <div className='hidden md:block w-[247px] h-[80vh] scrollbar-thin scrollbar-thumb-[#5DA9E9] scrollbar-track-[#EDEDED] overflow-y-scroll scrollbar-thumb-rounded-full mt-5'>
            {
                data.map(categories =>
                    <a href={`#${categories.cat_id}`}
                        key={categories.cat_id}
                        className={`w-[207px] h-[42px] text-[#737D94] text-left bg-white border-0 px-[10px] py-10 ml-5 mr-[19.81px] my-[10px] flex justify-start items-center text-base font-extrabold rounded-[10px] transition-colors ease-in-out hover:bg-[#5DA9E9] hover:text-white ${isActive[categories.cat_id] ? 'active text-white' : ''}`}
                        onClick={() => handleClick(categories.cat_id)}
                    >
                        {
                            categories.category
                        }
                    </a>
                )
            }
        </div >
    );
};

export default SideNav;