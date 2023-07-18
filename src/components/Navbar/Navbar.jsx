import React from 'react';

import './Navbar.scss';

export const Navbar = ({ className, ...props }) =>
{
	return (
		<div className={`Navbar ${ className !== undefined ? className : "" }`}>
			<div className="navContainer">
				<span className='logo'> HotelsBooking. </span>
			</div>
		</div>
	)
}
