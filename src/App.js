import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Hotels, Hotel } from "./Pages";
import LocationProvider from "./contexts/LocationContext";
import FilteredHotels from "./contexts/FilteredHotels";
import "./App.scss";

function App() {
  const [location, setLocation] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
 

  const locationValue = {
    location,
    setLocation,
  };

  const filteredHotelsValue = {
    filteredHotels,
    setFilteredHotels,
  };

  return (
    <div className="App">
        <LocationProvider.Provider value={locationValue}>
        <FilteredHotels.Provider value={filteredHotelsValue}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels/:location" element={<Hotels />} />
              <Route path="/hotel/:id" element={<Hotel />} />
            </Routes>
          </BrowserRouter>
        </FilteredHotels.Provider>
      </LocationProvider.Provider>
    
    </div>
  );
}

export default App;
