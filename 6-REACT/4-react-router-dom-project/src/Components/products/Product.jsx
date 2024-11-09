import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductValue } from '../../StateProvider'; // For fetching products
import { useStateValue } from '../../StateProvider'; // For managing basket

function Product() {
  const { id } = useParams(); // Get the product ID from the URL
  const { products, loading, error } = useProductValue(); // Get products from the context
  const { dispatch } = useStateValue(); // Get dispatch from global state

  // Handle loading or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Find the product by ID (parse ID to number if necessary)
  const product = products.find(item => item._id === parseInt(id));


  // State to store the selected image
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  const addToBasket = () => {
    // Push the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,  // Make sure price is included here
        discount: product.discount,  // If relevant
        quantity: 1 // Or whatever logic you need for quantity
      }
    });
  };

  return (
    <div>
      <main className="py-3 lg:py-6 bg-sky-50">
        <div className="container  mx-auto px-4 flex flex-col md:flex-row">

          {/* Left Section - Image Previews Only For Large device */}
          <div className="hidden lg:block w-full lg:w-3/4">
            <div className="grid lg:grid-cols-2 gap-8 relative">

              {/* All Image Preview Section */}
              <div className='grid gap-3 lg:grid-cols-3'>
                {product.image.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(image)} // Update selected image on click
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center`
                    }}
                    className='aspect-[3/4] w-28 h-40 rounded-md shadow-md cursor-pointer z-20'
                  >
                  </div>
                ))}
              </div>

              {/* Right Side - Main Image Preview */}
              <div
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  width: '300px',  // Custom width
                  height: '400px'   // Custom height
                }}
                className="flex justify-center items-center w-full max-w-sm aspect-[3/4] rounded-lg shadow-lg z-10"
              >
              </div>
            </div>
          </div>
          {/* Left Section - Image Previews Only For Small & Medium device */}
          <div className="block lg:hidden w-full md:w-1/2 px-4">
            <div className="flex flex-wrap justify-around		">
              {/* Main Image Preview */}
              <div
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  width: '300px',  // Custom width
                  height: '400px'   // Custom height
                }}
                className="flex justify-center items-center  pl-0  max-w-sm aspect-[3/4] rounded-lg shadow-lg z-10"
              >
              </div>
              {/* All Image Preview Section */}
              <div className='flex flex-row gap-2 md:gap-4 items-center ml-0 z-10'>
                {product.image.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(image)} // Update selected image on click
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center`
                    }}
                    className='my-5 aspect-[3/4] w-15 h-20 md:w-27 md:h-36 rounded-md shadow-md cursor-pointer'
                  >
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="w-full md:w-1/2  mt-0">
            <h1 className="text-xl font-bold text-gray-900">{product.title}</h1>

            <div className='p-2 bg-yellow-200 rounded-2xl'>
              <p className="text-md text-gray-700 font-semibold">Original Price: {product.price} Tk</p>
              <p className="text-sm text-gray-600 cursor-auto font-semibold">Discount: {product.discount} Tk</p>
            </div>

            <p className=" text-sm text-gray-600 mt-2">{product.description}</p>

            <div className="mt-2 text-sm">
              <label htmlFor="size" className="block text-gray-700 font-semibold">Size</label>
              <select id="size" className="block w-full mt-2 p-2 border border-gray-300 rounded-lg">
                {product.size.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div>

            <div className="mt-2 text-sm">
              <label htmlFor="color" className="block text-gray-700 font-semibold">Color</label>
              <div className="flex space-x-4 mt-2">
                {product.color.map((color, index) => (
                  <button key={index} className="w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }}></button>
                ))}
              </div>
            </div>

            <Link to={`/shoping-cart`} onClick={addToBasket}>
              <button className="w-[100%] mt-4 animate-bounce bg-gradient-to-tr from-sky-900 to-blue-500 text-white py-[10px] font-bold px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ">
                <p className='animate-pulse tracking-widest'>Buy Now</p>
              </button>
            </Link>
          </div>
        </div>

        {/* Product Description */}
        <div className="container mx-auto px-4 mt-12 text-sm">
          <div className="bg-gradient-to-tr from-sky-50 to-sky-600 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900">Product Description</h2>
            <p className="text-gray-700 mt-4">{product.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <p className="text-gray-700">"Great product! Really happy with my purchase."</p>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-yellow-500">★★★☆☆</span>
                  <p className="text-gray-700">"Good quality but a bit expensive."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default Product;
