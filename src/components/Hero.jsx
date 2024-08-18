import React, { useState } from 'react';
import img1 from '../assets/img/pesawat.jpg';
import haba from '../assets/img/logohaba.png';

function Hero() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header>
            <div
                className="relative w-full h-[480px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img1})` }}
            >
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
                    
                    {/* Navbar */}
                    <div className='py-10 px-8 lg:px-32'>
                        <nav className="bg-white shadow-md rounded-full font-montserrat">
                            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                                
                                {/* Left side: Navigation Links */}
                                <div className={`flex items-center space-x-8 ${isNavVisible ? 'block' : 'hidden'} lg:flex`}>
                                    <NavItem
                                        icon={
                                            <svg
                                                className="w-5 h-5 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M12 18V6m0 12a9 9 0 01-9-9 9 9 0 0118 0c0 4.97-4.03 9-9 9z"
                                                ></path>
                                            </svg>
                                        }
                                        text="Find Flight"
                                    />
                                    <NavItem
                                        icon={
                                            <svg
                                                className="w-5 h-5 text-gray-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 6h18M3 6a9 9 0 0018 0M3 6c0-5 9-5 9-5s9 0 9 5v9c0 5-9 5-9 5s-9 0-9-5V6z"
                                                ></path>
                                            </svg>
                                        }
                                        text="Find Stays"
                                    />
                                </div>

                                {/* Center: Logo */}
                                <div className="text-xl font-semibold text-gray-700">
                                    <img src={haba} className='w-32 md:w-40' alt="Logo" />
                                </div>

                                {/* Right side: Login/Sign Up */}
                                <div className="hidden lg:flex items-center space-x-8">
                                    <a href="#" className="text-gray-700 hover:text-gray-900">Login</a>
                                    <a href="#" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full">Sign up</a>
                                </div>

                                {/* Mobile/Tablet: Menu Button */}
                                <div className="lg:hidden">
                                    <button 
                                        onClick={() => setIsNavVisible(!isNavVisible)} 
                                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-center justify-center pt-32">
                        <div className="text-center text-white font-montserrat">
                            <h2 className="text-xl font-normal">
                                Helping others
                            </h2>
                            <p className="text-6xl font-semibold mt-2 mb-4">
                                Live & Travels
                            </p>
                            <p className="text-sm font-normal mb-8">
                                We are a team of talented designers making websites with Bootstrap
                            </p>
                            <button className="px-6 py-3 text-sm font-semibold bg-yellow-400 rounded-full transition duration-200 hover:bg-yellow-500">
                                Explore More
                            </button>
                        </div>
                    </div>

                    {/* Mobile/Tablet: Scroll to Top Button */}
                    <div className="absolute bottom-4 right-4 lg:hidden">
                        <button
                            onClick={handleScrollToTop}
                            className="p-3 bg-green-500 rounded-full text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}

function NavItem({ icon, text }) {
    return (
        <a href="#" className="text-gray-700 hover:text-green-500 flex items-center space-x-2">
            {icon}
            <span>{text}</span>
        </a>
    );
}

export default Hero;
