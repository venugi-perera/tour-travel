import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-20">
      <div className="pt-20">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap">
          {/* Left Side - BlogsComp */}
          <div className="md:w-1/2 w-full md:pr-5">
            <img
              src={image}
              alt={title}
              className="mx-auto w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          {/* Right Side - Image and Content */}
          <div className="md:w-1/2 w-full">
            <div className="container">
              <p className="text-slate-600 text-sm py-3"> </p>
              <h1 className="text-2xl font-semibold mb-10">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3"> </p>
        <h1 className="text-2xl font-semibold mb-10">{title}</h1>
        <p>{description}</p>
      </div> */}

      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
