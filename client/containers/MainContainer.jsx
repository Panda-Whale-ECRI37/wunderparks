import React, { useState, useEffect } from 'react';
import IconMaker from '../components/IconMaker.jsx';
import BasicExample from '../components/ProgressBar.jsx';
import SidebarContainer from './SidebarContainer.jsx';
import Navbar from '../components/Navbar.jsx';
import parksData from '../public/parksData.js';

// declare MainContainer function
const MainContainer = (props) => {
  //states to show the log a trip vs plan a trip

  const [plan, setPlan] = useState(true);
  const [logTrip, setLogTrip] = useState(false);

  //states for activities
  const [activities, setActivities] = useState({
    artsAndCulture: false,
    biking: false,
    birdWatching: false,
    // camping: false,
    // fishing: false,
    // guidedTours: false,
    // hiking: false,
    // giftShop: false,
  });
  const [topics, setTopics] = useState({
    archeology: false,
    explorers: false,
    fossils: false,
    // homesteading: false,
    // nativeAmericanHeritage: false,
    // womensHistory: false,
  });
  // useEffect(){

  //function to toggle between showing the setlog and plan trip

  // };
  return (
    <div className="toolpage">
      <Navbar
        setWelcome={props.setWelcome}
        setShowWebsite={props.setShowWebsite}
        setLogTrip={setLogTrip}
        setPlan={setPlan}
      />

      <div className="mainContainer">
        <SidebarContainer
          codes={props.codes}
          parksData={parksData}
          activities={activities}
          topics={topics}
          logTrip={logTrip}
          plan={plan}
        />
        <IconMaker codes={props.codes} />
      </div>
    </div>
  );
};

export default MainContainer;
