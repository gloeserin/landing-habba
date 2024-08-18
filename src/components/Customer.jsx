import React from 'react';
import { FaStar } from "react-icons/fa";
import customer from '../assets/img/customer.png';

export default function Customer() {
    return (
        <div className="flex flex-col items-center justify-center w-full p-6 md:p-20 gap-8 bg-white font-montserrat">
            <div className='text-center'>
                <h1 className='text-2xl md:text-4xl text-black font-poppins font-semibold'>
                    What people think <span className='text-yellowBrand'>about us</span>
                </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="w-full max-w-xs md:max-w-[280px] h-auto shadow-lg flex flex-col justify-start items-start">
                        {/* Card Top Section */}
                        <div className="w-full bg-white shadow-lg rounded-t-lg flex flex-col justify-center items-start gap-4 relative p-4">
                            {/* Highlight Bar */}
                            <div className="w-[100px] h-[11px] bg-yellowBrand rounded-t-lg"></div>

                            {/* SVG Icon at the Top Right */}
                            <div className="absolute top-4 right-4 md:right-6">
                                <svg
                                    width="371"
                                    height="24"
                                    viewBox="0 0 371 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M360.714 1.71436V12.0001H367.571C367.571 15.781 364.495 18.8572 360.714 18.8572V22.2858C366.386 22.2858 371 17.672 371 12.0001V1.71436H360.714Z"
                                        fill="#3A4F39"
                                    />
                                    <path
                                        d="M347 12.0001H353.857C353.857 15.781 350.781 18.8572 347 18.8572V22.2858C352.672 22.2858 357.286 17.672 357.286 12.0001V1.71436H347V12.0001Z"
                                        fill="#3A4F39"
                                    />
                                </svg>
                            </div>

                            {/* Rating Section */}
                            <div className="flex justify-start items-center gap-2 mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className="w-5 h-5 text-yellow-500" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-[#2d2e2e] text-sm md:text-base font-normal leading-snug">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>

                        {/* Card Bottom Section */}
                        <div className="w-full px-4 py-2 bg-[#9fcd9e] rounded-b-lg flex justify-start items-center gap-4">
                            <div className="w-12 h-12 flex justify-center items-center">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={customer}
                                    alt="User Avatar"
                                />
                            </div>
                            <div className="text-[#2d2e2e] text-sm md:text-base font-normal">
                                Lora Smith
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
