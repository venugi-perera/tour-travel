import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/jeep2.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women1.jpg";
import Banner2 from "../assets/travel-cover3.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[600px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[600px] w-full object-cover"
            style={{ marginBottom: "1000px" }}
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        {/* <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      </div>
    </>
  );
};

export default Home;
