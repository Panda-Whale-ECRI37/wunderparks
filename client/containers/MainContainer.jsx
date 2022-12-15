import React, { useState, useEffect } from 'react';
import IconMaker from '../components/IconMaker.jsx';
// import BasicExample from "../components/ProgressBar.jsx";
import SidebarContainer from './SidebarContainer.jsx';
import Navbar from '../components/Navbar.jsx';
import parksData from '../public/parksData.js';
import parkcodes from '../public/parkcodes.js';

// declare MainContainer function
const MainContainer = (props) => {
  // const [state, setState] = useState();
  const [plan, setPlan] = useState(true);
  const [logTrip, setLogTrip] = useState(false);
  // useEffect(){
  const allCodes = [];
  for (let parkName in parkcodes) {
    allCodes.push(parkcodes[parkName]);
  }
  const [filteredParkCodes, setFilteredParkCodes] = useState(allCodes);
  console.log(filteredParkCodes, 'maincontainer');

  //function to toggle between showing the setlog and plan trip

  // };
  return (
    <div className="toolpage">
      <Navbar
        setWelcome={props.setWelcome}
        setShowWebsite={props.setShowWebsite}
        setLogTrip={setLogTrip}
        setPlan={setPlan}
        logTrip={logTrip}
        plan={plan}
      />

      <div className="mainContainer">
        <SidebarContainer
          codes={props.codes}
          parksData={parksData}
          filteredParkCodes={filteredParkCodes}
          setFilteredParkCodes={setFilteredParkCodes}
          setLogTrip={setLogTrip}
          setPlan={setPlan}
          logTrip={logTrip}
          plan={plan}
        />
        <IconMaker codes={props.codes} filteredParkCodes={filteredParkCodes} />
      </div>
    </div>
  );
};

export default MainContainer;
