import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { fetchSliderData } from '../../services/heroSliderService';
import Button from '../shared/Button'

const HeroSection = () => {

    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchSliderData();
                setSliderData(data);
                // console.log(data);
            } catch (error) {
                console.error('Error setting the slider data:', error);
            }
        };

        getData();
    }, []);


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...settings}>
                        {sliderData.map((slide, index) => (
                            <div key={index}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text section  */}
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 
                                    sm:order-1 relative z-10 overflow-hidden'>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{slide.subTitle}</h1>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{slide.title}</h1>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl uppercase text-white dark:text-white/40 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{slide.title2}</h1>
                                        <div data-aos='fade-up'
                                            data-aos-offset='0' data-aos-duration='500' data-aos-delay='true'>
                                            <Button
                                                text='Shop By Category'
                                                bgColor='bg-primary'
                                                textColor='text-white' />
                                        </div>
                                    </div>
                                    {/* image section */}
                                    <div className='order-1 sm:order-2'>
                                        <div
                                            data-aos='zoom-in' data-aos-once='true' className='relative z-10'>
                                            <img src={slide.image} alt="" className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain
                                            mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HeroSection