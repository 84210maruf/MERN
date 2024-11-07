import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import axios from 'axios';

function Category_session() {
  const { session } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchP = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get('/api/products');
      console.log("Fetched Data:", response.data);
      setProducts(response.data);
      setLoading(false); // Stop loading once data is set
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err); // Set error if request fails
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchP();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className='bg-sky-50'>
      <div className="py-6">
        <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend className="px-6 text-2xl text-center">{session.toUpperCase()} Collections</legend>
        </fieldset>
      </div>

      <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
        <section
          id="Projects"
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center"
        >
          {products
            .filter(item => item.session === session) // Filter products by the dynamic category
            .map(item => (
              <ProductItem key={item._id} item={item} />
            ))}
        </section>
      </article>
    </div>
  );
}

export default Category_session;
