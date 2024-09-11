import React from 'react'
import Button from '../shared/Button'

const Category2 = () => {
    return (
        <div className='pb-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* first column  */}
                    <div className='order-3 py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[-2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Speakers</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-brandBlue' />
                            </div>
                        </div>
                        <img src='/images/category/speaker.png' alt="" className='w-[200px] absolute bottom-0 mx-auto sm:left-5' />
                    </div>

                    {/* second column  */}
                    <div className='order-2 py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[-2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Oculus</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-brandGreen' />
                            </div>
                        </div>
                        <img src='/images/category/vr.png' alt="" className='w-[320px] absolute bottom-0 left-[-20px]' />
                    </div>

                    {/* third column  */}
                    <div className='order-1 sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-brandWhite/90 to-brandWhite text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[-2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold mb-2'>Console</p>
                                <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
                            </div>
                        </div>
                        <img src='/images/category/gaming.png' alt="" className='w-[250px] absolute my-auto right-10 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category2