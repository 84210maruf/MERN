import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import DemoImg from './../../../public/slide1.jpg';
import { useStateValue } from '../../StateProvider';

function Product() {
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [, dispatch] = useStateValue();

  const fetchP = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      console.log("Fetched Data:", response.data);
      setProduct(response.data);
    } catch (error) {
      setError("Product not found");
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchP();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: product._id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        discount: product.discount,
        quantity: 1
      }
    });
  };

  return (
    <div>

      <main class="py-10 bg-sky-50">
        <div class="container space-x-4  mx-auto px-4 flex flex-col md:flex-row">
          {/* 
          <div class="md:w-1/2">
            <div class="relative">

              <div style={{
                backgroundImage: `url(${DemoImg})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`
              }} className='w-full h-72 object-cover rounded-lg shadow-lg'>
              </div>

              <div className='flex justify-center space-x-5 mt-4'>
                <div style={{
                  backgroundImage: `url(${product.image[1]})`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`
                }} className='w-28 h-20 object-cover rounded-md shadow-md'>
                </div>
                <div style={{
                  backgroundImage: `url(${product.image[2]})`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`
                }} className='w-28 h-20 object-cover rounded-md shadow-md'>
                </div>
                <div style={{
                  backgroundImage: `url(${product.image[3]})`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`
                }} className='w-28 h-20 object-cover rounded-md shadow-md'>
                </div>

              </div>

            </div>
          </div> */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div
                style={{
                  backgroundImage: `url(${product.image[0] || 'fallback_image_url'})`, // Fallback for the main image
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              ></div>

              {/* Thumbnails */}
              <div className="flex justify-center space-x-5 mt-4">
                {product.image.slice(1).map((img, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${img || 'fallback_image_url'})`, // Fallback for thumbnails
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                    className="w-28 h-20 object-cover rounded-md shadow-md"
                  ></div>
                ))}
              </div>
            </div>
          </div>



          <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 class="text-xl font-bold text-gray-900">[ {product.title} ]</h1>

            <div className='p-2 bg-yellow-200 rounded-2xl'>
              <p className="text-md text-gray-700 font-semibold">Original Price : {product.price} Tk</p>

              <p className="text-sm text-gray-600 cursor-auto  font-semibold">Discount : {product.discount} Tk</p>
            </div>

            <p class="text-sm text-gray-600 mt-4">{product.description}</p>


            <div class="mt-4 text-sm">
              <label for="size" class="block text-gray-700 font-semibold">Size</label>
              <select id="size" class="block w-full mt-2 p-2 border border-gray-300 rounded-lg">
                {product.size.map((item) => <option>{item}</option>)}
              </select>
            </div>

            <div className="mt-4 text-sm">
              <label htmlFor="color" className="block text-gray-700 font-semibold">
                Color
              </label>
              <div className="flex space-x-4 mt-2">

                {product.color.map((item, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2`}
                    style={{ backgroundColor: item }}
                  ></button>
                ))}
              </div>
            </div>



            <Link to={"/shoping-cart"} onClick={addToBasket} >
              <button class="w-full mt-10 animate-bounce  bg-gradient-to-tr from-sky-900 to-blue-500 text-white py-[10px] font-bold px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"><p className='animate-pulse tracking-widest'>Buy Now</p></button>
            </Link>

          </div>
        </div>


        <div class="container mx-auto px-4 mt-12 text-sm">
          <div class="bg-gradient-to-tr from-sky-50 to-sky-600 shadow-lg rounded-lg p-6">
            <h2 class="text-xl font-bold text-gray-900">Product Description</h2>
            <p class="text-gray-700 mt-4">Detailed description of the product goes here. Highlight features, materials, care instructions, etc.</p>

            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <div class="mt-4">
                <div class="flex items-center space-x-2">
                  <span class="text-yellow-500">★★★★☆</span>
                  <p class="text-gray-700">"Great product! Really happy with my purchase."</p>
                </div>
                <div class="flex items-center space-x-2 mt-4">
                  <span class="text-yellow-500">★★★☆☆</span>
                  <p class="text-gray-700">"Good quality but a bit expensive."</p>
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
