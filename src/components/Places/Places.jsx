import React from "react";
import Img6 from "../../assets/places/beach.jpg";
import Img5 from "../../assets/places/bridge.jpg";
import Img3 from "../../assets/places/fort.jpg";
import Img4 from "../../assets/places/relic.jpg";
import Img1 from "../../assets/places/sigiriya-4.jpg";
import Img2 from "../../assets/places/udawalawa.jpg";
import PlaceCard from "./PlaceCard";

const PlacesData = [
  {
    img: Img1,
    title: "Sigiriya",
    location: "Sigiriya",
    description:
      "Sigiriya, also known as Lion Rock, is an ancient rock fortress located in Sri Lanka. It is renowned for its stunning frescoes, gardens, and its historical significance as a royal palace and Buddhist monastery.",
    price: 6700,
    type: "Cultural, Historical",
  },
  {
    img: Img2,
    title: "Udawalawe National Park",
    location: "Sri Lanka",
    description:
      "Udawalawe National Park is a wildlife sanctuary in Sri Lanka known for its large population of elephants, as well as leopards, water buffalo, and a variety of bird species.",
    price: 6700,
    type: "Wildlife, Adventure",
  },
  {
    img: Img3,
    title: "Galle Fort",
    location: "Galle, Sri Lanka",
    description:
      "Galle Fort is a UNESCO World Heritage Site and an iconic historical landmark. It was originally built by the Portuguese and later expanded by the Dutch, offering stunning views of the ocean and colonial architecture.",
    price: 6200,
    type: "Cultural, Historical",
  },
  {
    img: Img4,
    title: "Temple of the Sacred Tooth Relic",
    location: "Kandy, Sri Lanka",
    description:
      "The Temple of the Sacred Tooth Relic, located in the city of Kandy, is one of the most sacred Buddhist sites in the world, housing a relic of the tooth of the Buddha.",
    price: 6700,
    type: "Cultural, Religious",
  },
  {
    img: Img5,
    title: "Nine Arches Bridge",
    location: "Ella, Sri Lanka",
    description:
      "The Nine Arches Bridge is an architectural marvel located in Ella, Sri Lanka. It is famous for its stunning views and the picturesque train rides that pass through the lush green tea plantations.",
    price: 6700,
    type: "Scenic, Architectural",
  },
  {
    img: Img6,
    title: "Bentota Beach",
    location: "Bentota, Sri Lanka",
    description:
      "Bentota Beach is a popular tourist destination in Sri Lanka known for its golden sandy beaches, water sports, and serene atmosphere, perfect for relaxation and adventure.",
    price: 6200,
    type: "Beach, Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
