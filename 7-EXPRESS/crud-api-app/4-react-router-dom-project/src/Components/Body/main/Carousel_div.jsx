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
        <div>
            {/* Carousel */}
            <div className="carousel w-full h-72 md:h-96 overflow-hidden relative">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item absolute inset-0 w-full h-full transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} className="w-full h-full object-fill" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex w-full justify-center gap-4 pb-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`btn btn-xs ${index === currentIndex ? 'bg-sky-500' : 'bg-sky-100'} shadow-md`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Carousel_div;
