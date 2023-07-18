import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import LocationContext from '../../../../contexts/LocationContext';
import hotelsData from '../../../../HotelsData/hotelsData.json';
import FilteredHotels from '../../../../contexts/FilteredHotels';
import './Search.scss';

export const Search = ({ className, showErrorMessage, ...props }) => {

  const {location} = useContext(LocationContext);
  const {setFilteredHotels} = useContext(FilteredHotels);

  const navigate = useNavigate();

	const handleSearch = () => {
			if (location !== '') {
		  navigate(`/hotels/${encodeURIComponent(location)}`);
			const fetchHotelsJson = async () => {
			  const locationHotels = hotelsData.filter(
				(hotel) => hotel.location.toLowerCase() === location.toLowerCase()
			  );
			  setFilteredHotels(locationHotels);
			};
			fetchHotelsJson();
		} else {
		  showErrorMessage();
		}
	};

  return (
    <div className={`headerSearchItem ${className !== undefined ? className : ''}`}>
      <button className="headerBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

