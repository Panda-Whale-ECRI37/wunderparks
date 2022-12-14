import React, { useState, useEffect } from "react";
import Icon from "./Icon.jsx";

// import in the images.js file
import images from "../public/images.js";
import parkCodes from "../public/parkcodes.js";

function IconMaker(props) {
  const { codes } = props;
  // console.log('props in iconmaker: ', props);

  const parksArr = [];
  for (let park in images) {
    let parkCode;
    //if(park matches filters...then do all of this stuff)
    Object.keys(parkCodes).forEach((element) => {
      if (element.toLowerCase().includes(park.toLowerCase())) {
        parkCode = parkCodes[element];
        // console.log(codes.includes(parkCode));
      }
    });
    //if page is plan your trip, then do this whole conditional
    // for object of parkcode in our data
    //check if it includes the filtered states, ex: activites -> name: "biking"

    parksArr.push(
      <Icon
        key={park}
        park={park}
        imgLink={images[park]}
        parkCode={parkCode}
        className={codes.includes(parkCode) ? "color" : undefined}
      />
    );
    // console.log('link :', imgLink/)

    //otherwise, do the regular pushing of all the icons
  }

  return <div className='iconMaker'>{parksArr}</div>;
}

export default IconMaker;
