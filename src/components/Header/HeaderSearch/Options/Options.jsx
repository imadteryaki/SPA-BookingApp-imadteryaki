import React, {useState,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import OpenDateOptionsContext  from '../../../../contexts/OpenDateOptionContext'

export const Options = ({ className, ...props }) => {

  const { openOptions, handleOpenOptions, handleOptionsList } = useContext(OpenDateOptionsContext);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (option, operation) => {
    setOptions((prev) => ({
      ...prev,
      [option]: operation === "i" ? prev[option] + 1 : prev[option] - 1,
    }));
  };
	return (
    <div className={`Options ${className !== undefined ? className : ''}`}>
    <div className="headerSearchItem">
      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
      <span onClick={handleOpenOptions} className="headerSearchText">
        {`${options.adult} adult . ${options.children} children . ${options.room} room`}
      </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterBtn"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterBtn"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 0}
                      className="optionCounterBtn"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="headerBtn doneBtn" onClick={handleOptionsList}>
              Done
            </button>
              </div>
            )}
          </div>
		</div>
	)
}
