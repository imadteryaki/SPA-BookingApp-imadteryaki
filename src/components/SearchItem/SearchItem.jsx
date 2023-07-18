import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationContext from '../../contexts/LocationContext';
import HotelContext from '../../contexts/HotelContext';
import './SearchItem.scss';

export const SearchItem = ({ className, hotel, ...props}) => {
  const { location } = useContext(LocationContext);
  const {setHotelId} = useContext(HotelContext)
  const navigate = useNavigate();
  
  const handleSeeAvailability = () => {
    navigate(`/hotels/${encodeURIComponent(location)}/hotel/${encodeURIComponent(hotel.id)}`);
    setHotelId(hotel.id);
  };

  return (
    <div className={`SearchItem ${className !== undefined ? className : ''}`}>
      <div className="searchItem">
        <img src={hotel.images[0]} alt={hotel.name} className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{hotel.name}</h1>
          <span className="siDistance">Location: {hotel.location}</span>
          <span className="siSubtitle">{hotel.description}</span>
          <span className="siFeatures">Amenities: {hotel.amenities.join(', ')}</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Rating:</span>
            <button>{hotel.rating}</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">${hotel.pricePerNight}</span>
            <button className="siCheckButton" onClick={handleSeeAvailability}>
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
