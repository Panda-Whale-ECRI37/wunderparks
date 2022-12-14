import React, { useState, useEffect } from 'react';
import IconMaker from '../components/IconMaker.jsx';
import BasicExample from '../components/ProgressBar.jsx';
import SidebarContainer from './SidebarContainer.jsx';
import Navbar from '../components/Navbar.jsx';
import parksData from '../public/parksData.js';

// declare MainContainer function
const MainContainer = (props) => {
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

  // };
  return (
    <div className="toolpage">
      <Navbar
        setWelcome={props.setWelcome}
        setShowWebsite={props.setShowWebsite}
      />

      <div className="mainContainer">
        <SidebarContainer
          codes={props.codes}
          parksData={parksData}
          activities={activities}
          topics={topics}
        />
        <IconMaker codes={props.codes} />
      </div>
    </div>
  );
};

export default MainContainer;
