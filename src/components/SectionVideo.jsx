import React, { useRef, useState } from 'react';
import tes from '../assets/img/video1.mp4';

export default function SectionVideo() {
    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const togglePause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPaused(false);
        } else {
            videoRef.current.pause();
            setIsPaused(true);
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-50 py-6 md:py-10">
            <div className="text-center mt-4 md:mt-8">
                <div className="flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl font-montserrat font-semibold">
                    <span>Watch us capturing our</span>
                    <div className="relative pl-1 md:pl-2">
                        <span>precious moments!</span>
                        <svg
                            className="absolute -bottom-3 -left-1 md:-bottom-5 md:-left-0"
                            width="120"
                            height="10"
                            viewBox="0 0 120 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.5 8C30 1.1985 90 -1.00006 115 4.49982"
                                stroke="#F1882C"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="relative w-full max-w-full pt-6 md:pt-10 flex justify-center">
                <div className="relative w-full max-w-[90%] md:max-w-7xl">
                    <video
                        ref={videoRef}
                        src={tes}
                        className="w-full h-[50vh] md:h-[80vh] object-cover rounded-lg"
                        autoPlay
                        muted
                        loop
                    />
                    <button
                        onClick={togglePause}
                        className="absolute bottom-4 right-4 bg-white bg-opacity-70 text-black px-4 py-2 rounded-full flex items-center"
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
                                d={isPaused ? "M6 18L18 12L6 6V18Z" : "M10 10H14V14H10V10Z M10 6H14V10H10V6Z"}
                            />
                        </svg>
                    </button>
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center bg-opacity-60 bg-green-500 text-white px-4 py-2 rounded-full text-sm md:text-base">
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12h2a2 2 0 002-2V8a2 2 0 00-2-2h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H6a2 2 0 00-2 2v2a2 2 0 002 2h2m4 0v8m-4-4h8"
                            ></path>
                        </svg>
                        <span>Prigen, Suruan</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
