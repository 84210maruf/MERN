import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import demoImg from './../../assets/Banner1.jpg'; // You might want to use this as a placeholder

function ProductItem({ item }) {

  if (!item) {
    return <div>Product not found.</div>;
  }

  const [{basket}, dispatch] = useStateValue();

  // const [isDisabled, setIsDisabled] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Check if the item is already in the basket
  useEffect(() => {
    const isInCart = basket.some((basketItem) => basketItem._id === item._id);
    setIsAdded(isInCart);
  }, [basket, item._id]);


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
    // setIsDisabled(true); // Disable the button after clicking
  };

  // Facebook Pixel "Add to Cart" Event Tracking
  if (window.fbq) {
    window.fbq('track', 'AddToCart', {
      content_name: item.title,
      content_ids: [item._id],
      content_type: 'product',
      value: item.price,
      currency: 'BDT', // Change the currency if needed (e.g., 'USD')
    });
    setIsAdded(true); // Update button state to indicate it's added
  }


  return (
    // <div className="w-full h-fit shadow-md duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl rounded">
    //   <Link to={`/product/${item._id}`}>
    //     <img
    //       src={item.image[0] || demoImg} // Fallback image
    //       alt={item.title} // More descriptive alt text
    //       className="h-44 md:h-60 w-full object-cover rounded-t md:rounded-t-md"
    //     />
    //   </Link>
    //   <div className="px-4 pt-1 w-full bg-gradient-to-tr from-yellow-300 to-sky-300 rounded-b">
    //     <p className="text-sm text-black truncate block capitalize">{item.title}</p>
    //     <div className="flex justify-center w-full mb-1">
    //       <p className="text-md font-semibold text-black cursor-auto">{(item.price - item.discount).toFixed()} Tk</p>
    //       <div className="ml-auto">
    //         <del>
    //           <p className="text-[12] text-gray-600 cursor-auto ml-4">{item.price.toFixed()}Tk</p>
    //         </del>
    //         <span className="text-white  uppercase text-[12px] cursor-auto">{item.brand}</span>
    //       </div>
    //     </div>
    //     <div className="flex justify-between">
    //       <Link to={`/product/${item._id}`}
    //         className="w-full animate-bounce focus:animate-none hover:animate-none inline-flex justify-center text-md font-medium bg-gradient-to-tr from-yellow-100 to-sky-400 px-4 py-2 rounded-lg tracking-widest text-sky-50">
    //         <span className="ml-2 text-sky-600 hover:text-sky-50">Buy Now</span>
    //       </Link>
    //     </div>
    //     <div hidden onClick={addToBasket} className="animate-pulse cursor-pointer">
    //       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25"
    //         fill="white" className="bi bi-bag-plus" viewBox="0 0 16 16">
    //         <path fillRule="evenodd"
    //           d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
    //         <path
    //           d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
    <div className="product-item w-[150px] sm:w-[180px] md:w-[200px] h-[300px] md:h-[320px] border-2 bg-customBg-300 border-customBg-800 rounded-md text-center font-normal relative group overflow-hidden">
      <Link to={`/product/${item._id}`}>
        <div className="w-[auto] h-[auto]">
          <img
            src={item.image[0]}
            alt={item.title}
            className="product-image object-cover rounded-t-md"
          />
        </div>
        <div className="p-[1px] w-full">
          <h2 className="text-sm font-semibold text-customBg-900">{item.title}</h2>
          <p className="text-sm font-medium text-gray-700">
            Price Only <span className="font-bold">{item.price}</span> Tk
          </p>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={addToBasket}
        disabled={isAdded} // Disable if already added
        className={`${isAdded ? 'bg-green-600 cursor-not-allowed' : 'bg-[#e49b0f]'
          } text-white rounded-md absolute bottom-2 left-1/2 
        transform -translate-x-1/2 w-[90%] font-semibold py-1 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${isAdded ? 'hover:bg-green-700' : 'hover:bg-customBg-900'
          }`}
      >
        {isAdded ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>

  );
}

export default ProductItem;
