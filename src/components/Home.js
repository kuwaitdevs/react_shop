import React from 'react'
import products_data from '../products_data';
import ProductList from './ProductList';
import Header from './Header';

function Home() {
    return (
        <div className='text-center'>
            <Header />
            <div className='row'>
                <ProductList productsData={products_data}></ProductList>
            </div>
        </div>
    )
}

export default Home