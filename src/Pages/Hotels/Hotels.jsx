import React, { useContext, useState } from 'react';
import { Header, Navbar, SearchItem } from '../../components';
import FilteredHotels from '../../contexts/FilteredHotels';
import HotelContext from '../../contexts/HotelContext';


export const Hotels = () => {
  const { filteredHotels } = useContext(FilteredHotels);
  const [hotelId, setHotelId] = useState(0);

  const hotelContextValue = {
    hotelId,
    setHotelId
  }

  return (
    <HotelContext.Provider value={hotelContextValue}>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listResult">
              {filteredHotels.map((hotel) => (
                <>
                <SearchItem key={hotel.id} hotel={hotel} hotelId={hotel.id} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HotelContext.Provider>
  );
};
