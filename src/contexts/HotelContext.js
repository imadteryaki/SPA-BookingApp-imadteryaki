import { createContext } from 'react';

const HotelContext = createContext({
  hotelId: 0,
  setHotelId: () => {}
});

export default HotelContext;