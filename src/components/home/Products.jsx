import React from 'react';
import products from '@/data/toys.json';
import Image from 'next/image';
import ProductCard from '../cards/ProductCard';

const Products = async () => {
    
    return (
        <div className=''>
            <h1 className='text-center text-2xl font-bold'>All Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                {/* Product items will go here */}
                {
                    products.map(product => (
                        <ProductCard key={product.title} product={product} />
                    ))
                }

            </div>
        </div>
    );
};

export default Products;