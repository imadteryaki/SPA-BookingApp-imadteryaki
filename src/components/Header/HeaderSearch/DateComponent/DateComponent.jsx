import React, { useState,useContext } from 'react';
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import  OpenDateOptionsContext  from '../../../../contexts/OpenDateOptionContext';

export const DateComponent = ({ className, ...props }) => {
  const { openDate, handleOpenDate } = useContext(OpenDateOptionsContext);
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  
  return (
    <div className={`headerSearchItem ${className !== undefined ? className : ''}`}>
    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
    <span onClick={handleOpenDate} className="headerSearchText">
      {dateState[0].endDate
        ? `${format(dateState[0].startDate, 'dd/MM/yyyy')} to ${format(dateState[0].endDate, 'dd/MM/yyyy')}`
        : 'Select dates'}
      </span>

      {openDate && (
        <DateRangePicker
          editableDateInputs={true}
          onChange={(item) => setDateState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateState}
          className="date"
        />
      )}
    </div>
  );
};
