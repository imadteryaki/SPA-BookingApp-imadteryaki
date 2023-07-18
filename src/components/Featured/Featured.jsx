import React from "react";

import "./Featured.scss";

const areas = [
  {
    name: "Dublin",
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
  },
  {
    name: "Reno",
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
  },
  {
    name: "Austin",
    image:
      "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
  },
];

export const Featured = ({ className, ...props }) => {
  return (
    <div className={`Featured ${className !== undefined ? className : ""}`}>
      {areas.map((area, i) => (
        <div className="featuredItem" key={i}>
          <img src={area.image} alt={area.name} className="featuredImg" />
          <h1 className="featuredTitles">{area.name}</h1>
        </div>
      ))}
    </div>
  );
};
