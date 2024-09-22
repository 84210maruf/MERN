import React from 'react';
import { Link } from 'react-router-dom';

import FounderImg from './../../assets/Founder_CEO.jpeg';
import FounderMinazDImg from './../../assets/Founder_minaz_dream.jpeg';
import CoFounder from './../../assets/Co-Founder.jpeg';
import CoFounder2 from './../../assets/Co-Founder_2.jpeg';
import AboutImg from './../../assets/aboutPic.jpg';

const AboutUs = () => {


  
  return (
    <div className="bg-sky-50 min-h-screen py-12 px-6 sm:px-12">
      <div className="bg-sky-200 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={AboutImg}
            alt="Our Team PNG"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl text-white font-semibold">About Us</h1>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Welcome to <span className='text-orange-500'>Millennial Clothing</span> where we believe in delivering exceptional products with outstanding service. Founded in {new Date().getFullYear()}, our mission is to bring you high-quality <span className='text-orange-500'>Clothing Products</span> that enhance your life and make a difference.
          </p>
          <p className="text-gray-700 mb-6">
            Our journey began with a simple idea: to create a shopping experience that is both enjoyable and memorable. With a team of passionate individuals, we have grown from a small startup into a thriving business that serves customers around the world.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At <span className='text-orange-500'>Millennial Clothing</span>, our mission is to provide our customers with top-notch products that not only meet but exceed their expectations. We are committed to quality, innovation, and customer satisfaction, ensuring that every purchase you make is a step toward a better experience.
          </p>

          <h2 className="text-3xl font-bold my-6 text-center">Meet the Team</h2>
          <div className="flex flex-wrap -m-4">
            <div className=" w-full md:w-1/3 p-4">
              <div className="bg-sky-50 rounded-lg shadow-md p-6">
                <img
                  src={FounderImg}
                  alt="Team Member 1"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Gazi Ahsanullah</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-sky-50 rounded-lg shadow-md p-6">
                <img
                  src={FounderMinazDImg}
                  alt="Team Member 2"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Amina Akter</h3>
                <p className="text-gray-600">Founder (Mina's Dream)</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-sky-50 rounded-lg shadow-md p-6">
                <img
                  src={CoFounder}
                  alt="Team Member 3"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Tarik Aziz</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-sky-50 rounded-lg shadow-md p-6">
                <img
                  src={CoFounder2}
                  alt="Team Member 3"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Sharif Islam Imran</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Thank you for choosing <span className='text-orange-500'>Millennial Clothing</span>. We look forward to serving you and making your shopping experience exceptional.
            </p>
            <Link
              to="/contact-us"
              className="animate-bounce  bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
