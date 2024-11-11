import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Carousel_div() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    const intervalTime = 3000; // 3 seconds

    // Fetch unique category images from backend
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/products');
                const products = response.data;

                // Extract unique categories with their images
                const uniqueCategoryImages = Array.from(
                    new Set(products.map(item => item.category))
                ).map(category =>
                    products.find(item => item.category === category)?.image?.[0]
                ).filter(Boolean);

                setImages(uniqueCategoryImages);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchCategories();
    }, []);

    // Auto-scroll function
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalTime);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    // Function to manually set the current slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-[#bae9f3] bg-opacity-90 ">
            <div className="w-[90%] mx-auto relative overflow-hidden rounded-md">
                <div className="w-full pt-[56.25%] relative md:h-[420px] lg:h-[600px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={image}
                                className="w-full h-full object-fit mx-auto"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                    
                    {/* Navigation Indicators */}
                    <div className="absolute bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-5 md:w-7 lg:w-10 h-2 md:h-4 lg:h-6 border-solid border-2 border-customBg-800 rounded-full cursor-pointer transition duration-300 ${index === currentIndex ? 'bg-customBg-500 scale-125' : 'bg-transparen'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel_div;
