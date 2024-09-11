import React, { useEffect, useState } from 'react'
import { fetchBrandsData } from '../../services/brandService'

const Brands = () => {

    const [brandsData, setBrandsData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchBrandsData();
                setBrandsData(data);
                // console.log('brands', data);
            } catch (error) {
                console.error('Error setting the banner data:', error);
            }
        };

        getData();
    }, []);
    return (
        <div className=' bg-gray-200 dark:bg-white/10'>
            <div className="container py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10 mx-auto">
                <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
                    {brandsData.map((brand, id) => {
                        return (
                            <div key={id}>
                                <div data-aos='zoom-out' data-aos-duration='500'>
                                    <img src={brand.image} alt={brand.image} className='w-[80px] dark:invert' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Brands