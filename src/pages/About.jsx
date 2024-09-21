import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to Red Rover Tours by Red, your gateway to exploring the
            hidden gems of Sri Lanka!
          </p>
          <br />

          <p>
            At Red Rover Tours, we are passionate about creating unforgettable
            travel experiences for both local adventurers and international
            explorers. With a deep love for Sri Lanka's rich culture, stunning
            landscapes, and vibrant history, we provide tailored tour services
            that cater to all types of travelers.
          </p>
          <br />

          <p>
            Whether you're a foreign tourist looking to immerse yourself in the
            beauty of Sri Lanka or a local seeking a fresh perspective on the
            wonders of your homeland, we’ve got something special for you. From
            guided tours through ancient landmarks and UNESCO World Heritage
            Sites to off-the-beaten-path adventures in scenic tea plantations
            and pristine beaches, we ensure every journey is unique and
            memorable.
          </p>
          <br />

          <p>
            Our expert guides, with extensive knowledge of Sri Lanka's history,
            culture, and natural beauty, are dedicated to providing personalized
            service and insider insights. With Red Rover Tours, you'll
            experience more than just sightseeing—you'll dive into the heart of
            Sri Lanka, creating lasting memories and connections with its people
            and places.
          </p>
          <br />
          <p>
            Join us at Red Rover Tours by Red and let’s discover Sri Lanka
            together, one unforgettable adventure at a time.
          </p>
          <br />
          <p>Your Journey, Our Passion.</p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
