import React, { useState } from "react";
import { Location } from "./Location";
import { DateComponent } from "./DateComponent";
import { Options } from "./Options";
import { Search } from "./Search";
import "./HeaderSearch.scss";
import OpenDateOptionsProvider from "../../../contexts/OpenDateOptionContext";

export const HeaderSearch = ({ className, type, ...props }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  

  const handleOptionsList = () => {
    setOpenOptions(false);
  };

  const handleOpenDate = () => {
    setOpenDate(true);
    setOpenOptions(false);
  };

  const handleOpenOptions = () => {
    setOpenOptions(true);
    setOpenDate(false);
  };

  
  const dateOptionValue = {
    openDate,
    openOptions,
    handleOpenDate,
    handleOpenOptions,
    handleOptionsList
  };

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  return (
    <>
      {type !== "list" && (
        <div className={`headerSearch ${className !== undefined ? className : ""}`}>
          <OpenDateOptionsProvider.Provider value={dateOptionValue}>
            <Location className="headerSearchItem" />
            <DateComponent
              className="headerSearchItem"
              openDate={false}
              setOpenDate={handleOpenDate}
              setOpenOptions={handleOpenOptions}
            />
            <Options className="headerSearchItem" openOptions={false} />
            <Search
              className="headerSearchItem"
              showErrorMessage={() => setShowErrorMessage(true)}
              
            />
            {showErrorMessage && <p className="errorMessage">Enter your destination</p>}
          </OpenDateOptionsProvider.Provider>
        </div>
      )}
    </>
  );
};
