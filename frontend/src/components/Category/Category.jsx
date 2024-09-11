import React from 'react'
import Button from '../shared/Button'

const Category = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* first column  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[-2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                                <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
                            </div>
                        </div>
                        <img src='/images/category/earphone.png' alt="" className='w-[320px] absolute bottom-0' />
                    </div>

                    {/* second column  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[-2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadets</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-brandYellow' />
                            </div>
                        </div>
                        <img src='/images/category/watch.png' alt="" className='w-[320px] absolute top-5' />
                    </div>

                    {/* third column  */}
                    <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[-2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Laptops</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-primary' />
                            </div>
                        </div>
                        <img src='/images/category/macbook.png' alt="" className='w-[300px] absolute right-2 bottom-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category