import React, { useState, useEffect } from "react";
import Icon from "./Icon.jsx";

// import in the images.js file
import images from "../public/images.js";
import parkCodes from "../public/parkcodes.js";

function IconMaker(props) {
  const { codes } = props;
  // console.log('props in iconmaker: ', props);
  // console.log(props);
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
    if (props.filteredParkCodes.includes(parkCode)) {
      parksArr.push(
        <Icon
          key={park}
          park={park}
          imgLink={images[park]}
          parkCode={parkCode}
          className={codes.parkCode ? "color" : undefined} //codes.includes(parkCode)
        />
      );
    }

    // useEffect(()=>{
    //   console.log(props.activities);

    // });
  }

  return <div className='iconMaker'>{parksArr}</div>;
}

export default IconMaker;
