import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faCar,
	faEarthAmericas,
	faPlane,
	faTaxi,
  } from "@fortawesome/free-solid-svg-icons";

import './HeaderList.scss';

export const HeaderList = ({ className, ...props }) =>
{
	return (
		<div className={`headerList ${className !== undefined ? className : ""}`}>
		<div className="headerListItem active">
		  <FontAwesomeIcon icon={faBed} />
		  <span>Stays</span>
		</div>
  
		<div className="headerListItem">
		  <FontAwesomeIcon icon={faPlane} />
		  <span>Flights</span>
		</div>
  
		<div className="headerListItem">
		  <FontAwesomeIcon icon={faCar} />
		  <span>Car rentals</span>
		</div>
  
		<div className="headerListItem">
		  <FontAwesomeIcon icon={faEarthAmericas} />
		  <span>Attractions</span>
		</div>
  
		<div className="headerListItem">
		  <FontAwesomeIcon icon={faTaxi} />
		  <span>Airport taxis</span>
		</div>
	  </div>
	)
}
