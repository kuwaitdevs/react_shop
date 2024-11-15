
import './App.css';
import img_store_front from './img_store_front.png';
import products_data from './products_data';
import ProductItem from './ProductItem';

function App() {

  const productsList = products_data.map(product => {
    return (
      <ProductItem product={product} />
    );
  })

  return (
    <div className='text-center'>
      <h1>Cookies and beyond</h1>
      <p>Where cookies brother gather</p>
      <img className='w-100' alt='image-store-front' src={img_store_front} />
      <div className='row'>
        {productsList}
      </div>
    </div>
  );
}

export default App;
