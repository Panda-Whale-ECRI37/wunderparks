import React, { useState, useEffect } from "react";
import Form from "../components/Form.jsx";
import ParkTally from "../components/ParkTally.jsx";
import PlanTrip from "../components/PlanTrip.jsx";

const SidebarContainer = (props) => {
  //render different sidebars function
  function switchSidebar() {
    if (props.plan === true) {
      return (
        <PlanTrip
          parksData={props.parksData}
          activities={props.activities}
          topics={props.topics}
        />
      );
    } else if (props.logTrip === true) {
      return (
        <div>
          <Form codes={props.codes} />
          <ParkTally codes={props.codes} />
        </div>
      );
    }
  }

  return (
    <div className='sidebarContainer'>
      {/* <Form codes={props.codes} />
      <ParkTally codes={props.codes} /> */}
      {/* <PlanTrip
        parksData={props.parksData}
        filteredParkCodes={props.filteredParkCodes}
        setFilteredParkCodes={props.setFilteredParkCodes}
      />
      /> */}
      {switchSidebar()}
    </div>
  );
};

export default SidebarContainer;
