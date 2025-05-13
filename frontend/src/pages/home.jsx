import React from "react";
import HeroSection from "../components/landingPage/HeroSection";
import Features from "../components/landingPage/Features";
import AboutUs from "../components/landingPage/AboutUs";
import Chart from "../components/landingPage/Chart";
import Footer from "../components/landingPage/Footer";
import ChartSection from "../components/landingPage/ChartSection";
import Navbar from "../layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-gradient-to-b from-[#1A0A42] via-[#1f0c49] to-[#0B0121] flex flex-col items-center justify-center overflow-y-hidden">
    <div className="w-full bg-gradient-to-b from-[#1A0A42] via-[#1f0c49] to-[#0B0121] flex flex-col items-center justify-center overflow-y-hidden pt-15">
      {/* Hero Section with id for scroll */}
      <HeroSection id="home" />

        {/* Hero Section with id for scroll */}

        {/* About Us */}
        <section id="about">
          <AboutUs />
        </section>

        {/* Chart */}
        <ChartSection />

        {/* Features */}
        <section id="features">
          <Features id="features" />
        </section>



      </div>
    </div>
      <Footer />
    </>
  );
};

export default Home;
