import React from "react";

import "./Footer.scss";

export const Footer = ({ className, ...props }) => {
  return (
    <div className={`Footer ${className !== undefined ? className : ""}`}>
      <p className="footerCopyRight"> Copyright &copy; HotelsBooking </p>
    </div>
  );
};
