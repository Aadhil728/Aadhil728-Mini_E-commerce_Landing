import React, { useEffect, useState } from 'react'
import Heading from '../shared/Heading'
import ProductsCard from './ProductsCard'
import { fetchLatestProducts } from '../../services/productService';

const ProductsSection = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchLatestProducts();
                setProductData(data);
                // console.log('products', data);
            } catch (error) {
                console.error('Error setting the banner data:', error);
            }
        };

        getData();
    }, []);

    return (
        <div className='container my-10'>
            <Heading title='Latest Products' subTitle='Explore Our Products' />

            <ProductsCard data={productData} />
        </div>
    )
}

export default ProductsSection