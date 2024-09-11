import React, { useEffect, useState } from 'react'
import Heading from '../shared/Heading'
import { fetchBlogsData } from '../../services/blogsService'

const Blogs = () => {

    const [blogsData, setBlogsData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchBlogsData();
                setBlogsData(data);
                // console.log('blogs', data);
            } catch (error) {
                console.error('Error setting the blogs data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div>
            <div className="container my-12">
                {/* Heading section  */}
                <Heading title='Recent News' subTitle='Explore Our Blogs' />

                {/* blogs section  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-7 '>
                    {blogsData.map((blog, id) => {
                        return (
                            <div key={id} data-aos='fade-up' data-aos-delay='60' className='bg-white dark:bg-gray-900'>
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={blog.image} alt={blog.image} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs text-gray-500'>{blog.published}</p>
                                    <p className='font-bold line-clamp-1'>{blog.title}</p>
                                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{blog.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blogs