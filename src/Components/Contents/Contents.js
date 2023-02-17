import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';

const Contents = ({ data, addItem, selectedId, handleAddItem, handleRemoveItem, getAddedId }) => {

    const { productData, categoryData } = data



    return (
        <div className='relative w-full md:w-[65vw] lg:w-[77vw] my-5 h-[67vh] md:h-[79.5vh] overflow-y-scroll scrollbar-hide'>
            {
                categoryData.map(productCategory => <div id={productCategory.cat_id} key={productCategory.cat_id} className='md:border-b'>



                    <div className='flex justify-between items-center mt-[17px] mb-[11px] md:mb-10px] md:mt-[30px]'>

                        <div className='flex items-center'>
                            <h2 className='h-7 font-bold text-3xlb text-[#100E3A] mr-[13.78px] ml-5 md:ml-[38.19px]'>{productCategory.category}</h2>

                            <MdArrowForwardIos className='h-7' />

                        </div>

                        <button className='block md:hidden text-[#5DA9E9] font-bold text-xs'>View All</button>
                    </div>




                    <div className='flex ml-5 md:ml-12 w-[90vw] md:w-auto whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide'>
                        {
                            productData.map(product =>
                                <div key={product.prod_id} className=''>
                                    {
                                        product.cat_id === productCategory.cat_id &&



                                        <div className='w-[117px] md:w-[140px] h-[158px] md:h-[222px] md:p-[10px] md:mb-[20px] relative mx-5 md:mx-[20.29px]'>

                                            <img src={product.image} alt='' className='w-[100px] h-[100px]' />

                                            <div className='absolute right-3 md:right-5 bottom-16 md:bottom-28'>
                                                {(addItem && selectedId.find(id => product.prod_id === id)) || getAddedId?.find(id => product.prod_id === id) ?


                                                    <button>
                                                        <AiFillMinusCircle className='bg-white rounded-full text-[#40D589] h-[33px] w-[33px]' onClick={() => handleRemoveItem(product.prod_id)} />
                                                    </button>

                                                    :

                                                    <button>
                                                        <AiFillPlusCircle className='bg-white rounded-full text-[#40D589] h-[33px] w-[33px]' onClick={() => handleAddItem(product.prod_id)} />
                                                    </button>

                                                }
                                            </div>

                                            <h2 className='font-bold text-base md:text-xl lg:text-xl text-[#100E3A]'>{product.price}</h2>
                                            <h3 className='text-sm md:text-lg font-semibold text-[#100E3A]'>{product.product_name}</h3>
                                            <p className='font-bold md:font-semibold text-xs md:text-base text-[#B6BAC3]'>{product.quantity}</p>
                                        </div>



                                    }

                                </div>
                            )
                        }
                    </div>


                </div>)
            }
        </div>
    );
};

export default Contents;