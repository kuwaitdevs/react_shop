import React from 'react'
import ProductItem from './ProductItem';

function ProductList({ productsData }) {

    const productsList = productsData.map(product => {
        return (
            <ProductItem product={product} />
        );
    });

    return (
        productsList
    )
}

export default ProductList