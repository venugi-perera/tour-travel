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
import Jeep from "../assets/jeep.png";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[600px] relative">
          <div className="pt-20">
            <div className="container mx-auto flex flex-wrap md:flex-nowrap">
              {/* Left Side - BlogsComp */}
              <div className="md:w-1/2 w-full md:pr-5">
                <img
                  src={Jeep}
                  alt={"title"}
                  className="mx-auto w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>

              {/* Right Side - Image and Content */}
              <div className="md:w-1/2 w-full">
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontFamily: "'Comic Sans MS', sans-serif",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "3rem",
                      color: "#000000",
                      fontWeight: "bold",
                      margin: "0",
                      lineHeight: "1.2",
                    }}
                  >
                    Red Rover Tours
                    <br />
                    By
                  </h1>
                  <h2
                    style={{
                      fontSize: "2.5rem",
                      color: "#DC143C",
                      fontWeight: "bold",
                      margin: "10px 0",
                    }}
                  >
                    Crimson Red
                  </h2>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "#333",
                      maxWidth: "600px",
                      margin: "20px auto",
                      lineHeight: "1.6",
                      marginTop: "50px",
                    }}
                  >
                    Discover the most breathtaking destinations with Crimson
                    Red, your trusted guide to unforgettable journeys. From
                    hidden gems to iconic landmarks, we craft personalized tours
                    that ignite your passion for exploration. Let's make
                    memories that last a lifetime!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[600px] w-full object-cover"
            style={{ marginBottom: "1000px" }}
          >
            <source src={NatureVid} type="video/mp4" />
          </video> */}
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
