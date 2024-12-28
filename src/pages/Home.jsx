import React from "react";
import BannerImg from "../assets/cover-women1.jpg";
import Jeep from "../assets/jeep.png";
import Banner2 from "../assets/travel-cover3.jpg";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="relative min-h-[600px] sm:h-[600px] h-auto">
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
              <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
                <svg
                  width="450"
                  height="556"
                  viewBox="0 0 450 556"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="277"
                    cy="63"
                    r="225"
                    fill="url(#paint0_linear_25:217)"
                  />
                  <circle
                    cx="17.9997"
                    cy="182"
                    r="18"
                    fill="url(#paint1_radial_25:217)"
                  />
                  <circle
                    cx="76.9997"
                    cy="288"
                    r="34"
                    fill="url(#paint2_radial_25:217)"
                  />
                  <circle
                    cx="325.486"
                    cy="302.87"
                    r="180"
                    transform="rotate(-37.6852 325.486 302.87)"
                    fill="url(#paint3_linear_25:217)"
                  />
                  <circle
                    opacity="0.8"
                    cx="184.521"
                    cy="315.521"
                    r="132.862"
                    transform="rotate(114.874 184.521 315.521)"
                    stroke="url(#paint4_linear_25:217)"
                  />
                  <circle
                    opacity="0.8"
                    cx="356"
                    cy="290"
                    r="179.5"
                    transform="rotate(-30 356 290)"
                    stroke="url(#paint5_linear_25:217)"
                  />
                  <circle
                    opacity="0.8"
                    cx="191.659"
                    cy="302.659"
                    r="133.362"
                    transform="rotate(133.319 191.659 302.659)"
                    fill="url(#paint6_linear_25:217)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_25:217"
                      x1="-54.5003"
                      y1="-178"
                      x2="222"
                      y2="288"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F74646" /> {/* Bright red */}
                      <stop
                        offset="1"
                        stopColor="#F74646"
                        stopOpacity="0"
                      />{" "}
                      {/* Transparent red */}
                    </linearGradient>
                    <radialGradient
                      id="paint1_radial_25:217"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                    >
                      <stop
                        offset="0.145833"
                        stopColor="#F74646"
                        stopOpacity="0"
                      />
                      <stop offset="1" stopColor="#F74646" stopOpacity="0.08" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_25:217"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                    >
                      <stop
                        offset="0.145833"
                        stopColor="#F74646"
                        stopOpacity="0"
                      />
                      <stop offset="1" stopColor="#F74646" stopOpacity="0.08" />
                    </radialGradient>
                    <linearGradient
                      id="paint3_linear_25:217"
                      x1="226.775"
                      y1="-66.1548"
                      x2="292.157"
                      y2="351.421"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F74646" />
                      <stop offset="1" stopColor="#F74646" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_25:217"
                      x1="184.521"
                      y1="182.159"
                      x2="184.521"
                      y2="448.882"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F74646" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_25:217"
                      x1="356"
                      y1="110"
                      x2="356"
                      y2="470"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F74646" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_25:217"
                      x1="118.524"
                      y1="29.2497"
                      x2="166.965"
                      y2="338.63"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F74646" />
                      <stop offset="1" stopColor="#F74646" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {/* Video or other elements */}
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        {/* <Testimonial /> */}
        {/* <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      </div>
    </>
  );
};

export default Home;
