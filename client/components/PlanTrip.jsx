import React, { useEffect, useState } from "react";
import states from "../public/states.js";
import parksData from "../public/parksData.js";

const PlanTrip = (props) => {
  const statesList = [];
  for (let abbr in states) {
    statesList.push(states[abbr]);
  }

  const activities = {
    artsAndCulture: { value: false, name: "Arts and Culture" },
    biking: { value: false, name: "Biking" },
    birdWatching: { value: false, name: "Birdwatching" },
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
        <form className='form' onSubmit={handleSubmit}>
          {" "}
          {/* //put a handle submit here */}
          <h2>Plan Your Trip</h2>
          {/* <div className='select-dropdown'>
            <select
              name='state'
              id='state'
              className='select-dropdown'
              // value={props.state}
              // onChange={(e) => {
              //   props.setState(e.target.value);
              // }}
            >
              <option value=''>Select State:</option>
              {statesList}
            </select> */}
          {/* </div> */}
          <h3>Activities</h3>
          <div className='checkboxes'>
            <input
              type='checkbox'
              id='artsAndCulture'
              value={activities.artsAndCulture}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='artsAndCulture'>Arts and Culture</label>
            <input
              type='checkbox'
              id='biking'
              value={activities.biking}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='biking'>Biking</label>
            <input
              type='checkbox'
              id='birdWatching'
              value={activities.birdWatching}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='birdWatching'>Bird Watching</label>
          </div>
          <h3>Topics</h3>
          <div className='checkboxes'>
            <input
              type='checkbox'
              id='archeology'
              value={topics.archeology}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='archeology'>Archeology</label>
            <input
              type='checkbox'
              id='explorers'
              value={topics.explorers}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='explorers'>Explorers and Expeditions</label>
            <input
              type='checkbox'
              id='fossils'
              value={topics.fossils}
              onChange={(e) => toggleItem(e.target.id)}
            />{" "}
            <label htmlFor='fossils'>Fossils</label>
          </div>
          <button type='submit' id='submit'>
            Filter Parks
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanTrip;
