import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [, dispatch] = useStateValue();
  const [selectedSize, setSelectedSize] = useState(''); // State for selected size
  const [selectedColor, setSelectedColor] = useState(''); // State for selected color
  
  const fetchP = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    } catch (err) {
      setError("Product not found");
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchP();
  }, [id]);
  
  // const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [selectedImage, setSelectedImage] = useState(product?.image?.[1] || null);
  useEffect(() => {
    if (product && product.image?.length > 0) {
      setSelectedImage(product.image[0]); // Default to the first image
      setSelectedColor(product.color[0]); // Default to the first image
      setSelectedSize(product.size[0]); // Default to the first image
    }
  }, [product]);


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
        quantity: 1,
        size: selectedSize,
        color: selectedColor,
      },
    });
  };

  const fallbackImage = "https://via.placeholder.com/150"; // Replace with actual fallback

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <main className="py-10 bg-sky-50">

        <div className="container mx-auto px-4 flex flex-col md:flex-row overflow-hidden">
          {/* Left Section */}
          {product && (
            <div className="hidden lg:block w-full lg:w-3/4">
              <div className="grid lg:grid-cols-2 gap-4">
                {/* Thumbnail Section */}
                <div className="grid grid-cols-2 gap-2">
                  {product.image.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`my-5 w-15 h-20 md:w-27 md:h-36 aspect-[3/4] rounded-md shadow-md cursor-pointer
                                bg-cover bg-center transition-transform duration-200 hover:scale-105
                                ${selectedImage === image ? "border-2 border-blue-500 shadow-lg" : "border border-transparent"}`}
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  ))}
                </div>
                {/* Main Image */}
                <div
                  className="w-[340px] h-[452px] max-w-sm aspect-[3/4] rounded-lg shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedImage || product.image[0]})` }}
                />
              </div>
            </div>
          )}

          {/* Product Details Section */}
          <div className="p-4 rounded-2xl shadow-lg bg-customBg-300 w-full md:w-1/2  mt-0">
            <h1 className="">{product.title}</h1>
            {/* Price section  */}

            {/* <div className='p-2 bg-yellow-200 rounded-2xl'>
              <p className="text-md text-gray-700 font-semibold">Original Price: {product.price} Tk</p>
              <p className="text-sm text-gray-600 cursor-auto font-semibold">Discount: {product.discount}% finalPrice :{finalPrice} </p>
            </div> */}

            <div className="p-2 bg-customBg-100 rounded-2xl border shadow-lg">
              <p className="">Original Price : <span className="line-through text-red-500">{product.price} Tk</span></p>
              <p className="">
                <span className="text-green-600">Discount : {((product.discount/product.price)*100).toFixed(2)} %</span>

              </p>
              <p>
                <span className="">Final Price : {product.price - product.discount} Tk</span>
              </p>
              <div className="flex items-center">
                <span className="">You Save: </span>
                <span className="ml-2 font-semibold text-red-600">{(product.discount)} Tk</span>
              </div>
            </div>
            <h3 className="">Product Code : {product.productId}</h3>
            {/* Description */}
            {/* <p className=" text-sm text-gray-600 mt-2">{product.description}</p> */}
            {/* Dynamic Description Section */}
            <div className="mb-1">
              <h3 className="text-lg">Description:</h3>
              <ul className="list-disc ml-5">
                {product.description}
                {/* {product.description?.map((desc, index) => (
                  <li className="text-sm" key={index}>{desc}</li>
                ))} */}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg">Features:</h3>
              <ul className="list-disc ml-5">
                {product.features && product.features.map((feature, index) => (
                  <li className="text-sm" key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="">
              <label htmlFor="size" className="block text-lg">Size</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="block w-[30%] p-1 border border-[#e49b0f] text-sm rounded-lg text-center"
              >
                {product.size.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="size" className="block text-lg">Colors</label>
              <select
                id="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="block w-[40%] p-2 border border-[#e49b0f] text-sm rounded-lg text-center"
              >
                {product.color.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>


            <div className="mt-2 ">
              {/* <h3 className="text-md">Color : {product.color}</h3> */}
              <h3 className="text-md">Product Code : {product.productId}</h3>

            </div>

            <div className="flex justify-center items-center mt-4">
              <Link to={`/shoping-cart`} onClick={addToBasket}>
                <button className="w-[230px] animate-bounce bg-[#e49b0f] text-white py-[10px] font-bold px-4 rounded-lg hover:bg-customBg-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <p className='animate-pulse tracking-widest'>Buy Now</p>
                </button>
              </Link>
            </div>
          </div>
        </div>


        {/* Product Description Section */}
        <div className="container mx-auto px-4 mt-12 text-sm">
          <div className="bg-gradient-to-tr from-sky-50 to-sky-600 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900">Product Description</h2>
            <p className="text-gray-700 mt-4">
              Detailed description of the product goes here. Highlight features, materials, care instructions, etc.
            </p>

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
