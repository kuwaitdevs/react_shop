import React from 'react'

function ProductItem({ product }) {
    return (
        <div className='product-item' key={product.id}>
            <img className='product-item-img' src={product.image} alt={product.name} />
            <span className='mb-2'>{product.name}</span>
            <span className='mb-2'>{product.price} KWD</span>
        </div>
    )
}

export default ProductItem