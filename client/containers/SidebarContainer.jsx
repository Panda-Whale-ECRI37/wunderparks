import React, { useState, useEffect } from "react";
import Form from "../components/Form.jsx";
import ParkTally from "../components/ParkTally.jsx";
import PlanTrip from "../components/PlanTrip.jsx";

const SidebarContainer = (props) => {
  return (
    <div className='sidebarContainer'>
      {/* <Form codes={props.codes} />
      <ParkTally codes={props.codes} /> */}
      <PlanTrip
        parksData={props.parksData}
        filteredParkCodes={props.filteredParkCodes}
        setFilteredParkCodes={props.setFilteredParkCodes}
      />
    </div>
  );
};

export default SidebarContainer;
