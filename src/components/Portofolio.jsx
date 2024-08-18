import React from 'react';
import portofolio1 from '../assets/img/portofolio1.png';

export default function Portofolio() {
    return (
        <div className="flex flex-col items-center justify-center w-full p-6 md:p-20 gap-8 bg-white font-montserrat">
            <div className="w-full max-w-[1232px] flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[24px] md:text-[32px] font-semibold text-black">This is our portofolio</h1>
                    <p className="text-sm md:text-base font-normal text-[#112211] opacity-75">
                        See our portofolio lorem ipsum dolar sit amet
                    </p>
                </div>
                <div>
                    <button className="h-10 px-4 py-2 mt-6 rounded border border-[#8dd3bb] text-[#112211] text-sm font-medium hover:bg-[#8dd3bb] hover:text-white transition">
                        Contact us for more
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="relative w-full max-w-[350px] h-[396px]">
                        {/* Green Card acting as a shadow */}
                        <div className="absolute top-[25px] left-[30px] w-[325px] h-[374px] bg-yellowBrand/60 rounded-[20px]" />
                        
                        {/* White Card with shadow and border */}
                        <div className="absolute top-0 left-0 w-[325px] h-[374px] bg-white rounded-[20px] shadow-lg border border-[#E5E7EB] p-6 flex flex-col justify-start items-center gap-6">
                            {/* Text Content */}
                            <div className="flex flex-col gap-4">
                                <div className="text-[#112211] text-xl font-bold font-['TradeGothic LT Extended']">
                                    “A real sense of community, nurtured”
                                </div>
                                <div className="text-[#112211] opacity-50 text-xs font-medium font-['Montserrat']">
                                    Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                                </div>
                            </div>
                            {/* Image */}
                            <img className="w-full h-[200px] rounded-lg" src={portofolio1} alt="Placeholder" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
