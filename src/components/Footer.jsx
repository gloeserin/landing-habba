import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import haba from "../assets/img/logohaba.png";


const Footer = () => {
    return (
        <footer id="contact" className="bg-mintGreen text-white py-2 px-8 font-montserrat">
            <div className="container mx-auto flex justify-between gap-2 max-sm:flex-col sm:items-center">
                <div className="flex items-center justify-between py-24 text-black">
                    <div className="space-y-1">
                        <img src={haba} className="w-32 h-12 pt-6 max-sm:text-4xl" alt="" />
                        <div className="text-sm text-white font-medium  py-5">
                            Jl. Aria Suriagala No. 83, Kota Bogor, Provinsi Jawa Barat, 16119 <br />
                            +62 251 8632 170, <br />
                            contact@kronika.co.id
                        </div>
                    </div>
                </div>
                <div className="flex  lg:space-x-4 max-lg:space-x-2 mb-10 sm:pr-7 text-white">
                    <a href="https://www.facebook.com/profile.php?id=61557602897838&mibextid=ZbWKwL" className="text-2xl hover:underline text-custom-white font-Leaguespartan">
                        <FaFacebook />
                    </a>
                    <a href="https://www.tiktok.com/@kronika.co.id?_t=8ogtuisqkpl&_r=1" className="text-2xl hover:underline text-custom-white font-Leaguespartan">
                        <FaTiktok />
                    </a>
                    <a href="https://www.instagram.com/kronika.co.id" className="text-2xl hover:underline text-custom-white font-Leaguespartan">
                        <GrInstagram />
                    </a>
                    <a href="https://wa.me/message/COYL226EZJTZC1" className="text-2xl hover:underline text-custom-white font-Leaguespartan">
                        <IoLogoWhatsapp />
                    </a>
                </div>
            </div>
            <div className="text-white font-montserrat font-medium">
                <h1 className="text-center text-sm text-custom-white font-raleway">
                    Copyright
                    2024 PT Abdi Bangun Aksara
                    -
                    All Rights Reserved
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
