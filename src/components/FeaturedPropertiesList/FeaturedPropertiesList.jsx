import React from "react";
import "./FeaturedPropertiesList.scss";

export const FeaturedPropertiesList = ({ className, ...props }) => {
  const hotelsData = require('../../HotelsData/hotelsData.json');

  return (
    <div className={`FeaturedPropertiesList ${className !== undefined ? className : ""}`}>
         {hotelsData.slice(0,4).map((hotel) => (
            <div key={hotel.id} className="slide">
              <div className="featuredPropertiesItem">
                {hotel.images && hotel.images.length > 0 && (
                  <img src={hotel.images[0]} alt="" className="featuredPropertiesImg" />
                )}
                <span className="featuredPropertiesName">{hotel.name}</span>
                <span className="featuredPropertiesCity">{hotel.location}</span>
                <span className="featuredPropertiesPrice">Starting from ${hotel.pricePerNight}</span>
                <div className="featuredPropertiesRating">
                  <button>{hotel.rating}</button>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          ))}
        
      
    </div>
  );
};
