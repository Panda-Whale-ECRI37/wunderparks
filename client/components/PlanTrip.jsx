import React, { useEffect, useState } from "react";
import states from "../public/states.js";
import parksData from "../public/parksData.js";

const PlanTrip = (props) => {
  const statesList = [];
  for (let abbr in states) {
    statesList.push(states[abbr]);
  }
  console.log(statesList);

  const activities = {
    artsAndCulture: { value: false, name: "Arts and Culture" },
    biking: { value: false, name: "Biking" },
    birdWatching: { value: false, name: "Birdwatching" },
    hiking: {value: false,name:"Hiking"}
    // camping: false,
    // fishing: false,
    // guidedTours: false,
    // hiking: false,
    // giftShop: false,
  };
  const topics = {
    archeology: { value: false, name: "Archeology" },
    explorers: { value: false, name: "Explorers and Expeditions" },
    fossils: { value: false, name: "Fossils and Paleontology" },
    ancientSeas: {value: false,name:"Ancient Seas"}
    // homesteading: false,
    // nativeAmericanHeritage: false,
    // womensHistory: false,
  };

  const toggleItem = (value) => {
    if (value in activities) {
      activities[value].value = !activities[value].value;
    }

    if (value in topics) {
      topics[value].value = !topics[value].value;
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(props.filteredParkCodes, "before");

    const filterActivities = [];
    const filterTopics = [];

    for (let key in activities) {
      if (activities[key].value) {
        filterActivities.push(activities[key].name);
      }
    }
    for (let key in topics) {
      if (topics[key].value) {
        filterTopics.push(topics[key].name);
      }
    }
    const count = filterTopics.length + filterActivities.length;
    const filteredCodes = [];

    for (let parkCode in parksData) {
      let currCount = 0;
      //if(selectedState === parkCode.states) (....)
      for (let i = 0; i < parksData[parkCode].activities.length; i++) {
        if (filterActivities.includes(parksData[parkCode].activities[i].name)) {
          currCount += 1;
        }
      }
      for (let i = 0; i < parksData[parkCode].topics.length; i++) {
        if (filterTopics.includes(parksData[parkCode].topics[i].name)) {
          currCount += 1;
        }
      }
      if (currCount === count) filteredCodes.push(parkCode);
    }

    props.setFilteredParkCodes(filteredCodes);
    console.log(props.filteredParkCodes, "after");
  };

  return (
    <div className='plan-trip-wrapper'>
      <div className='formWrapper'>
        <form className='form' id="plan-trip-form"onSubmit={handleSubmit}>
          {" "}
          {/* //put a handle submit here */}
          <h2>Plan Your Trip</h2>
          
          <h3>Activities</h3>
          <div className='checkboxes' id="activity-div">
            <div classname="input"> 
            <input
              type='checkbox'
              id='artsAndCulture'
              value={activities.artsAndCulture}
              onChange={(e) => toggleItem(e.target.id)}
            />
            <label htmlFor='artsAndCulture'>Arts and Culture</label>
            
            </div>
            <div classname="input"> 
            <input
              type='checkbox'
              id='biking'
              value={activities.biking}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='biking'>Biking</label>
            </div>
            <div classname="input"> 
            <input
              type='checkbox'
              id='hiking'
              value={activities.hiking}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='hiking'>Hiking</label>
            </div>
            <div classname="input"> 
            <input
              type='checkbox'
              id='birdWatching'
              value={activities.birdWatching}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='birdWatching'>Bird Watching</label>
            </div>
          </div>
          <h3>Topics</h3>
          <div className='checkboxes' id="topic-div">
          <div classname="input"> 
            <input
              type='checkbox'
              id='archeology'
              value={topics.archeology}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='archeology'>Archeology</label>
            </div>
            <div classname="input"> 
            <input
              type='checkbox'
              id='explorers'
              value={topics.explorers}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='explorers'>Explorers</label>
            </div> 
            <div classname="input"> 
            <input
              type='checkbox'
              id='fossils'
              value={topics.fossils}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='fossils'>Fossils</label>
            </div> 
            <div classname="input"> 
            <input
              type='checkbox'
              id='ancientSeas'
              value={topics.ancientSeas}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='ancientSeas'>Ancient Seas</label>
            </div>
          </div>
          <div className="submit-btn-plan">
          <button type='submit' id='submit-plan'>
            Filter Parks
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanTrip;
