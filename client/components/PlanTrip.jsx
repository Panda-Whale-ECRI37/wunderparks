import React, { useEffect, useState } from "react";
import states from "../public/states.js";

const PlanTrip = (props) => {
  const statesList = [];
  for (let abbr in states) {
    statesList.push(states[abbr]);
  }

  const activities = {
    artsAndCulture: false,
    biking: false,
    birdWatching: false,
    // camping: false,
    // fishing: false,
    // guidedTours: false,
    // hiking: false,
    // giftShop: false,
  };
  const topics = {
    archeology: false,
    explorers: false,
    fossils: false,
    // homesteading: false,
    // nativeAmericanHeritage: false,
    // womensHistory: false,
  };

  // const handleSubmit = () => {
  //   //check all of the toggle values
  //   //search the parkData
  //   //set state of filteredParkCodes with the matching park codes
  // };

  return (
    <div className='plan-trip-wrapper'>
      <div className='formWrapper'>
        <form className='form'>
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
              // value={props.activities.artsAndCulture}
              // onChange={(e) => toggleActivities(e.target.id)}
            />{" "}
            <label htmlFor='artsAndCulture'>Arts and Culture</label>
            <input
              type='checkbox'
              id='biking'
              // value={props.activities.biking}
              // onChange={(e) => toggleActivities(e.target.id)}
            />{" "}
            <label htmlFor='biking'>Biking</label>
            <input
              type='checkbox'
              id='birdWatching'
              // value={props.activities.birdWatching}
              // onChange={(e) => toggleActivities(e.target.id)}
            />{" "}
            <label htmlFor='birdWatching'>Bird Watching</label>
          </div>
          <h3>Topics</h3>
          <div className='checkboxes'>
            <input
              type='checkbox'
              id='archeology'
              // value={props.topics.archeology}
              // onChange={(e) => toggleTopics(e.target.id)}
            />{" "}
            <label htmlFor='archeology'>Archeology</label>
            <input
              type='checkbox'
              id='explorers'
              // value={props.topics.explorers}
              // onChange={(e) => toggleTopics(e.target.id)}
            />{" "}
            <label htmlFor='explorers'>Explorers and Expeditions</label>
            <input
              type='checkbox'
              id='fossils'
              // value={props.topics.fossils}
              // onChange={(e) => toggleTopics(e.target.id)}
            />{" "}
            <label htmlFor='fossils'>Fossils</label>
          </div>
          <button
            type='submit'
            id='submit'
            // onClick={savePark}
          >
            Filter Parks
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanTrip;
