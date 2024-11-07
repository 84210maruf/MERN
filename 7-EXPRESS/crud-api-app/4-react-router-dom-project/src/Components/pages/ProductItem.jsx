import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import demoImg from './../../assets/slide4.jpg'; // You might want to use this as a placeholder

function ProductItem({ item }) {

  if (!item) {
    return <div>Product not found.</div>;
  }



  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [, dispatch] = useStateValue();
  // const [selectedSize, setSelectedSize] = useState(''); // State for selected size
  // const [selectedColor, setSelectedColor] = useState(''); // State for selected color


  // const fetchP = async () => {
  //   try {
  //     const response = await axios.get(`/api/products/${id}`);
  //     setProduct(response.data);
  //   } catch (err) {
  //     setError("Product not found");
  //     console.error("Error fetching product:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchP();
  // }, []);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: item._id,
        title: item.title,
        description: item.description,
        image: item.image,
        price: item.price,
        discount: item.discount,
        quantity: 1,
        size: item.size[0],
        color: item.color[0],
      },
    });
  };

  return (
    <div className="w-full h-fit shadow-md duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
      <Link to={`/product/${item._id}`}>
        <img
          src={item.image[0] || demoImg} // Fallback image
          alt={item.title} // More descriptive alt text
          className="h-44 md:h-60 w-full object-cover rounded-t md:rounded-t-md"
        />
      </Link>
      <div className="px-4 pt-1 w-full bg-gradient-to-tr from-yellow-300 to-sky-300 rounded-b">
        <p className="text-sm text-black truncate block capitalize">{item.title}</p>
        <div className="flex justify-center w-full mb-1">
          <p className="text-md font-semibold text-black cursor-auto">{(item.price - item.discount).toFixed()} Tk</p>
          <div className="ml-auto">
            <del>
              <p className="text-[12] text-gray-600 cursor-auto ml-4">{item.price.toFixed()}Tk</p>
            </del>
            <span className="text-white  uppercase text-[12px] cursor-auto">{item.brand}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to={`/product/${item._id}`}
            className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-yellow-100 to-sky-400 px-4 py-2 rounded-lg tracking-widest text-sky-50">
            <span className="ml-2 text-sky-600 hover:text-sky-50">Buy Now</span>
          </Link>
        </div>
        <div hidden onClick={addToBasket} className="animate-pulse cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25"
            fill="white" className="bi bi-bag-plus" viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
            <path
              d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
