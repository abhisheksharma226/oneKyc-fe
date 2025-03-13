import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import Testimonial from "../Testimonial/Testimonial";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        {/* <Brands /> */}
        <Services />
        <Banner />
        <Banner2 />
        <Testimonial />
        <Newsletter />
        <Footer />
      </main>
    );
  };
  
  export default Home;
  