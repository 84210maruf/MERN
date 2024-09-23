// src/ProductList.js
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';



const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('demodata.json'); // replace with your JSON URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
