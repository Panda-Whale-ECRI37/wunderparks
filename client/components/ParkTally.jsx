import React, { _useEffect, useState } from "react";
import parkcodes from "../public/parkcodes.js";
import ProgressBar from "./ProgressBar.jsx";
// import

const ParkTally = (props) => {
  const parksVisited = [];
  //  iterate through the parkcodes js file
  for (let park in parkcodes) {
    const { codes } = props; //codes = ['brca','cong']
    if (codes.includes(parkcodes[park])) { //parkcodes[park] = 'brca'
      parksVisited.push(
        <li className='visited_item' key={parkcodes[park]}>
          {park}
        </li>
      );
    }
  }

  return (
    <div className='parkTally'>
      <ul className='visited_list'>
        <h2>Parks Visited: {parksVisited.length}</h2>
        <ProgressBar percent={props.codes} />
        <div className='listItems'>{parksVisited}</div>
      </ul>
    </div>
  );
};

export default ParkTally;
