import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductValue } from '../../StateProvider';
import ProductItem from './ProductItem';

const Results = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';
    // console.log(query)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
        // console.log(products)
    }, []);

    const filteredResults = products.filter(product =>
        (product.category?.toLowerCase().includes(query.toLowerCase()) ||
         product.subCategory?.toLowerCase().includes(query.toLowerCase()) ||
         product.title?.toLowerCase().includes(query.toLowerCase()) ||
         product.session?.toLowerCase().includes(query.toLowerCase()) ||
         product._id?.toLowerCase().includes(query.toLowerCase()) ||
         product.brand?.toLowerCase().includes(query.toLowerCase()))
    );
    
    
    // console.log('Filtered Results:', filteredResults);
    

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Search Results for: "{query}"</h2>
            {loading ? (
                <p className="text-gray-500">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : filteredResults.length > 0 ? (
                <div className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">
                    {filteredResults.map(item => (
                        <ProductItem key={item._id} item={item} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No results found</p>
            )}
        </div>
    );
};

export default Results;
