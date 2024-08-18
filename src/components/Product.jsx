import React from 'react';
import product1 from '../assets/img/product1.png';
import product2 from '../assets/img/product2.png';

export default function Product() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 md:p-20 gap-8 bg-white font-montserrat">
      <div className="w-full max-w-[1232px] flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-[24px] md:text-[32px] font-semibold text-black">This is our product</h1>
          <p className="text-sm md:text-base font-normal text-[#112211] opacity-75">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="h-10 px-4 py-2 rounded border border-[#8dd3bb] text-[#112211] text-sm font-medium hover:bg-[#8dd3bb] hover:text-white transition">
            Contact us for more
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1232px] flex flex-col md:flex-row justify-center items-center gap-6 pt-8 md:pt-12">
        <div className="w-full md:w-[48%] h-[300px] md:h-[400px] relative shadow-lg">
          <img
            className="w-full h-full absolute top-0 left-0 rounded-[20px] object-cover"
            src={product1}
            alt="Product Image"
          />
          <div className="absolute pt-20 md:pt-36 inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-[20px]">
            <h2 className="text-[24px] md:text-[32px] font-semibold text-white text-center mb-2 font-montserrat">
              Flights
            </h2>
            <p className="text-xs md:text-base text-white font-extralight text-center mb-4 px-6 font-poppins">
              Search Flights & Places Hire to our most popular destinations
            </p>
            <button className="flex items-center font-poppins rounded-full justify-center h-10 md:h-12 px-4 py-2 bg-[#8dd3bb] text-white text-sm font-medium hover:bg-[#7ac5aa] transition-colors">
              Show Flights
            </button>
          </div>
        </div>
        <div className="w-full md:w-[48%] h-[300px] md:h-[400px] relative shadow-lg">
          <img
            className="w-full h-full absolute top-0 left-0 rounded-[20px] object-cover"
            src={product2}
            alt="Product Image"
          />
          <div className="absolute pt-20 md:pt-36 inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-[20px]">
            <h2 className="text-[24px] md:text-[32px] font-semibold text-white text-center mb-2 font-montserrat">
              Stays
            </h2>
            <p className="text-xs md:text-base text-white font-extralight text-center mb-4 px-6 font-poppins">
              Search Flights & Places Hire to our most popular destinations
            </p>
            <button className="flex items-center font-poppins rounded-full justify-center h-10 md:h-12 px-4 py-2 bg-[#8dd3bb] text-white text-sm font-medium hover:bg-[#7ac5aa] transition-colors">
              Show Stays
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
