import React, { useState } from "react";

import "./PropertyList.scss";

const properties = [
  {
    type: "Hotels",
    image:
      "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    desc: "you can find a lot of Hotels depending on your wish",
  },
  {
    type: "Apartments",
    image:
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    desc: "you can also rent an apartment for your Holidays",
  },
  {
    type: "Resorts",
    image:
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    desc:
      "you can book by our website at your resort in the country you want ",
  },
  {
    type: "Villas",
    image:
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    desc: "for a new and different experience, we are here for you",
  },
  {
    type: "Cabins",
    image:
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    desc: "Cabins in most countries in the world",
  },
];

export const PropertyList = ({ className, ...props }) => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className={`PropertyList ${className || ""}`}>
      {properties.map((property, index) => (
        <div className="propertyListItem" key={index}>
          <img
            src={property.image}
            alt={property.type}
            className="propertyListImg"
          />
          <h2 className="propertyListTitle">{property.type}</h2>
          <button
            className="showHideBtn"
            onClick={() => toggleDetails(index)}
          >
            {showDetails[index] ? "Hide details" : "Show details"}
          </button>
          {!showDetails[index] && (
              <h3 className="propertyListDesc">{property.desc}</h3>
          )}
        </div>
      ))}
    </div>
  );
};
