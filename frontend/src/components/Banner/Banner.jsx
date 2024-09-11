import React from 'react'
import Button from '../shared/Button'

const Banner = ({ data }) => {
    return (
        <div className='min-h-[420px] flex justify-center'>
            <div className='container'>
                {data.map((data, i) => {
                    return (
                        <div key={i} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl' style={{ backgroundColor: data.bgColor }}>
                            {/* first column  */}
                            <div className='p-6 sm:p-8'>
                                <p data-aos='slide-right' data-aos-duration='500' className='text-sm'>{data.discount}</p>
                                <h1 data-aos='zoom-out' data-aos-duration='500' className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                                <p data-aos='fade-up' data-aos-duration='500' className='text-sm'>{data.date}</p>
                            </div>

                            {/* second column  */}
                            <div data-aos='zoom-in' data-aos-duration='500'>
                                <img src={data.image} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover' />
                            </div>

                            {/* third column  */}
                            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                                <p data-aos='zoom-out' data-aos-duration='500' className='font-bold text-xl'>{data.title2}</p>
                                <p data-aos='fade-up' data-aos-duration='500' className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                                <p data-aos='fade-up' data-aos-duration='500' className='text-sm tracking-wide leading-5'>{data.description}</p>
                                <div data-aos='fade-up' data-aos-duration='500' data-aos-offset='0'>
                                    <Button text='Shop Now' textColor='text-primary' bgColor='bg-white' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Banner