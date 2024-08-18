import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Portofolio from "../components/Portofolio";
import Customer from "../components/Customer";
import About from "../components/About";
import SectionVideo from "../components/SectionVideo";
import Footer from "../components/Footer";

export default function Landing() {
    return (
        <div className="bg-[#F1F4F5] h-screen max-h-screen">
            
            <Navbar />
            <Hero />
            <About />
            <Product />
            <Portofolio />
            <Customer />
            <SectionVideo />
            <Footer />
        </div>
    );
}