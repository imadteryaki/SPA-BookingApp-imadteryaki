import React from "react";

import "./HeaderTitle.scss";

export const HeaderTitle = ({ className, type, ...props }) => {
  return (
    <>
      {type !== "list" && (
        <div className={`HeaderTitle ${className !== undefined ? className : ""}`}>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDesc">
            {" "}
            Put your information's down to have interesting results{" "}
          </p>
      
        </div>
      )}
    </>
  );
};
