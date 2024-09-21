import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/fort.jpg";
import Img2 from "../../assets/places/bridge.jpg";
import Img3 from "../../assets/places/sigiriya-4.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img3,
    title: "Sigiriya The Ancient Rock Fortress",
    description:
      "Sigiriya, often referred to as the 'Lion Rock,' is an ancient fortress and palace located in the central Matale District of Sri Lanka. Rising majestically nearly 200 meters above the surrounding plains, this UNESCO World Heritage site is one of the most iconic landmarks in the country. Built in the 5th century by King Kasyapa, Sigiriya served as both a royal residence and a formidable stronghold. The rock's summit was once adorned with opulent palaces, gardens, and pools, while its lower slopes were surrounded by extensive moats and walls. Sigiriya is also renowned for its stunning frescoes, which depict celestial maidens, and the Mirror Wall, where ancient visitors inscribed verses of admiration. Today, Sigiriya remains a testament to the ingenuity and artistic achievement of ancient Sri Lankan civilization, attracting visitors from around the world who come to marvel at its history, architecture, and breathtaking views.",
  },
  {
    id: 2,
    image: Img2,
    title: "Nine Arches Bridge",
    description:
      "The Nine Arches Bridge, located in Ella, Sri Lanka, is one of the most iconic bridges in the world. It was constructed during the British colonial period, primarily out of stone and brick, without the use of steel. Surrounded by lush green forests and tea plantations, this architectural marvel offers a stunning view, especially when trains pass over the bridge. Visitors can explore the area by foot, taking in the serene atmosphere and beautiful scenery that surrounds this engineering masterpiece.",
    author: "Someone",
  },
  {
    id: 3,
    image: Img1,
    title: "Galle Fort",
    description:
      "Galle Fort, a UNESCO World Heritage Site, is located in the coastal city of Galle, Sri Lanka. Built by the Portuguese in the 16th century and extensively fortified by the Dutch, it showcases a unique blend of European architecture with South Asian traditions. Walking through the cobblestone streets, visitors are transported back in time, with historic buildings, churches, and museums to explore. The fort is also surrounded by stunning ocean views, making it a perfect destination for history enthusiasts and nature lovers alike.",
    author: "Someone",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
