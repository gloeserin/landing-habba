import React from 'react';
import product1 from '../assets/img/product1.png';

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center w-full p-8 bg-white font-montserrat">
            <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12 max-w-5xl mx-auto my-8 md:my-16 gap-8">
                
                {/* Image Grid */}
                <div className='grid grid-cols-2 grid-rows-6 h-[50vh] md:h-[80vh] w-full md:w-1/2'>
                    <img
                        className='row-span-3 object-cover w-full h-full p-2'
                        src={product1}
                        alt='Product 1'
                    />
                    <img
                        className='row-span-2 object-cover w-full h-full p-2'
                        src={product1}
                        alt='Product 1'
                    />
                    <img
                        className='row-span-2 object-cover w-full h-full p-2'
                        src={product1}
                        alt='Product 1'
                    />
                    <img
                        className='row-span-3 object-cover w-full h-full p-2'
                        src={product1}
                        alt='Product 1'
                    />
                    <img
                        className='row-span-2 object-cover w-full h-full p-2'
                        src={product1}
                        alt='Product 1'
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-black mb-4 text-center md:text-left">
                        About Habatour
                    </h2>
                    <p className="text-lg font-semibold text-gray-700 mb-2 text-center md:text-left">
                        Better you will feel if{' '}
                        <span className="text-yellowBrand">you</span> eat a{' '}
                        <span className="text-yellowBrand">healthy</span> meal
                    </p>
                    <p className="text-gray-600 mb-6 text-center md:text-left">
                        Eating organic is said to have multiple benefits,
                        including fresher fruits and veggies and more
                        antioxidants. If you are looking to taste-test organic
                        options or simply transition your diet to being
                        completely organic, these options are clean,
                        nutrient-dense, and delicious. Organic meal delivery
                        services offer
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-mintGreen flex items-center justify-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Delivering best products
                                </h3>
                                <p className="text-gray-600">
                                    Phasellus euismod hendrerit elit. Maecenas
                                    dapibus ligula.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-mintGreen flex items-center justify-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Healthy food from farm
                                </h3>
                                <p className="text-gray-600">
                                    Phasellus euismod hendrerit elit. Maecenas
                                    dapibus ligula.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="text-4xl font-bold text-gray-800">
                            1200+
                        </div>
                        <div className="text-xl text-gray-600">
                            Happy Clients
                        </div>
                        <button className="bg-yellowBrand text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
                            More About
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
