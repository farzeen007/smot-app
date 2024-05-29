import React from "react";
import Navbar from "../comps/Navbar";
import Image from "next/image";
import WhySmot from "../comps/WhySmot";
import Packages from "../comps/Packages";
import Services from "../comps/Services";
import People from "../comps/People";
import Blogs from "../comps/Blogs";
import DownloadApp from "../comps/DownloadApp";
import Footer from "../comps/Footer";
// import styles from '../styles/home.module.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <Image
        layout="responsive" // Set layout to responsive
        width={1920} // Set the width of the image
        height={1080} // Set the height of the image
        objectFit="cover"
        quality={100}
        src="/slider.png"
        alt="Home Slider"
        style={{ position: "relative" }}
      />
      <WhySmot />
      <Packages />
      <Services />
      <People />
      <Blogs />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default Home;
