import React, { useEffect, useState } from 'react';
import { useProductValue } from '../../StateProvider';  // Access the ProductContext
import ProductItem from '../products/ProductItem';

function MinasDream() {
  const { products, loading, error } = useProductValue();  // Get products from context
  const [minaProducts, setMinaProducts] = useState([]);

  // Filter products for Mina's Dream brand
  useEffect(() => {
    if (!loading && products.length > 0) {
      // const filteredProducts = products.filter(product => product.brand === "Mina's Dream");
      const filteredProducts = products.filter(product => /Mina/i.test(product.brand));
      setMinaProducts(filteredProducts);
    }
  }, [products, loading]); // Run the filter on products change

  // Handle loading and error states
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-customBg bg-opacity-50">
      <h2 className="text-center py-4">Mina's Dream Collections</h2>
      
      <div className="product-list">
        {minaProducts.length > 0 ? (
          <div className='w-full py-6 px-2 md:px-4 flex justify-center'>
            <section
              className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-2 gap-y-4 md:gap-y-4 place-content-center'
            >
              {minaProducts.map(item => (
                <ProductItem key={item._id} item={item} />
              ))}</section>
          </div>
        ) : (
          <p>No products available for Mina's Dream.</p>
        )}
{/* 
        {filteredProducts.length > 0 ? (
          <div className='w-full py-6 px-2 md:px-4 flex justify-center'>
            <section
              className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center'
            >
              {filteredProducts.map(item => (
                <ProductItem key={item._id} item={item} />
              ))}
            </section>
          </div>
        ) : (
          <div className="text-center text-red-500">No products found in this category.</div>
        )} */}
      </div>
    </div>
  );
}

export default MinasDream;
