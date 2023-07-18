import React from "react";

import "./Header.scss";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderSearch } from "./HeaderSearch";

export const Header = ({ className, type, search,...props }) => {
  return (
    <div className={`Header ${className !== undefined ? className : ""}`}>
      <div className="headerContainer" style={ type === 'list' ? {margin: '20px 0 0 0'} : {margin: '20px 0 100px 0'}}>
        <HeaderTitle type={type}/>
        {search !== 'hidden'&& (
          <HeaderSearch/>
        )}
      </div>
    </div>
  );
};
