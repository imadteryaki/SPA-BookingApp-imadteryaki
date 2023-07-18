import React, { useContext } from 'react';
import LocationContext from '../../../../contexts/LocationContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import './Location.scss';

export const Location = ({ className, ...props }) =>
{
  const handleLocation = (e) =>{
    setLocation(e.target.value)
  } 
   const {location,setLocation} = useContext(LocationContext)
	return (
		<div className={`headerSearchItem ${ className !== undefined ? className : "" }`}>

      <FontAwesomeIcon icon={faLocation} className="headerIcon" />
      <input
        type="text"
        className="headerSearchInput"
        placeholder="Where is your direction"
        value={location}
        onChange={handleLocation}
      />
    </div>
	
	)
}

