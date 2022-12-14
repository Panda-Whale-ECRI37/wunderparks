import React, { useState, useEffect } from "react";
import IconMaker from "../components/IconMaker.jsx";
import BasicExample from "../components/ProgressBar.jsx";
import SidebarContainer from "./SidebarContainer.jsx";
import Navbar from "../components/Navbar.jsx";
import parksData from "../public/parksData.js";
import parkcodes from "../public/parkcodes.js";

// declare MainContainer function
const MainContainer = (props) => {
  const [state, setState] = useState();
  // useEffect(){
  const allCodes = [];
  for (let parkName in parkcodes) {
    allCodes.push(parkcodes[parkName]);
  }
  const [filteredParkCodes, setFilteredParkCodes] = useState(allCodes);

  // };
  return (
    <div className='toolpage'>
      <Navbar />
      <div className='mainContainer'>
        <SidebarContainer
          codes={props.codes}
          parksData={parksData}
          filteredParkCodes={filteredParkCodes}
          setFilteredParkCodes={setFilteredParkCodes}
        />
        <IconMaker codes={props.codes} filteredParkCodes={filteredParkCodes} />
      </div>
    </div>
  );
};

export default MainContainer;
