import React, { useEffect, useState } from "react";

const PlanTrip = (props) => {
  // const [activities, setActivities] = useState({
  //   artsAndCulture: false,
  //   biking: false,
  //   birdWatching: false,
  //   // camping: false,
  //   // fishing: false,
  //   // guidedTours: false,
  //   // hiking: false,
  //   // giftShop: false,
  // });

  // const [topics, setTopics] = useState({
  //   archeology: false,
  //   explorers: false,
  //   fossils: false,
  //   // homesteading: false,
  //   // nativeAmericanHeritage: false,
  //   // womensHistory: false,
  // });

  return (
    <div className='plan-trip-wrapper'>
      <div className='formWrapper'>
        <form className='form'>
          <h2>Plan Your Trip</h2>
          <h3>Activities</h3>
          <div className='checkboxes'>
            <input
              type='checkbox'
              id='artsAndCulture'
              value={props.activities.artsAndCulture}
            />{" "}
            <label htmlFor='artsAndCulture'>Arts and Culture</label>
            <input
              type='checkbox'
              id='biking'
              value={props.activities.biking}
            />{" "}
            <label htmlFor='biking'>Biking</label>
            <input
              type='checkbox'
              id='birdWatching'
              value={props.activities.birdWatching}
            />{" "}
            <label htmlFor='birdWatching'>Bird Watching</label>
          </div>

          <h3>Topics</h3>
          <div className='checkboxes'>
            <input
              type='checkbox'
              id='archeology'
              value={props.topics.archeology}
            />{" "}
            <label htmlFor='archeology'>Archeology</label>
            <input
              type='checkbox'
              id='explorers'
              value={props.topics.explorers}
            />{" "}
            <label htmlFor='explorers'>Explorers and Expeditions</label>
            <input
              type='checkbox'
              id='fossils'
              value={props.topics.fossils}
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
