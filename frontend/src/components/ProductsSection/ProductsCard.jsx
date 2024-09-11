import React from 'react'
import Button from '../shared/Button'

// Define a fallback image URL
const fallbackImage = '/images/products/fallBackImg.png';

const ProductsCard = ({ data }) => {

    // Limit the data to only the first 8 products
    const limitedData = data.slice(0, 8);

    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                {limitedData.map((product, id) => {
                    // Check if there are images and use the first one or fallback to the default image
                    const mainImage = product.images.length > 0 ? product.images[0].image : fallbackImage;

                    return (
                        <div key={id}>
                            <div data-aos='fade-up' data-aos-delay='50' className='bg-brandWhite/70 p-2 rounded-md overflow-hidden relative group space-y-3'>
                                <img src={mainImage} alt={product.name} className='h-[180px] w-[260px] object-contain rounded-md' />
                                {/* button hover  */}
                                <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center duration-200'>
                                    <Button text='Add to Cart' bgColor='bg-primary' textColor='text-white' />
                                </div>
                            </div>
                            <div className='leading-7'>
                                <h1 className='font-semibold text-lg mt-2'>{product.name}</h1>
                                <h1 className='font-bold text-lg'>{product.price}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsCard