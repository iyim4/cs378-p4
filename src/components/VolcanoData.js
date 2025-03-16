import React from 'react';
import { BsTriangle, BsCheckCircleFill, BsExclamationTriangleFill, 
    BsExclamationSquareFill, BsExclamationOctagonFill } from "react-icons/bs";

// This is a functional component that represents a single volcano
// it renders the name, observatory, alert level, and synopsis (if orange+)
// vdata is the data entry of ONE volcano
const VolcanoData = ({ vdata }) => {

  // set the volcano name
  var vname = "ERROR";
  if ('volcano_name' in vdata) {
    var append = " Volcano";
    if (vdata.volcano_name.toLowerCase().includes("volcan")) {
      append = "";
    }
    vname = vdata.volcano_name + append;
  } else if ('volcano_name_appended' in vdata) {
    vname = vdata.volcano_name_appended;
  }

  // render volcano entry
  return (
    <div class="entry">
      <h2>{vname}</h2>
      <p>{vdata.obs_fullname}<br></br>Status: {getIcon(vdata)}</p> 
      <Description vdata={vdata} />
    </div>
  )
};

// renders the relevant icon corresponding to the alert level
// uses colors and icons to decrease user gulfs
function getIcon(vdata) {
  var level = vdata.alert_level;
  if (level !== "WARNING") {
    level = level.toLowerCase();
  }

  switch(vdata.color_code) {
    case "GREEN":
      return (
        <span class="vgreen">
          <BsCheckCircleFill class="vgreen" /> {level}
        </span>
      );
    case "YELLOW":
      return (
        <span class="vyellow">
          <BsExclamationTriangleFill class="vyellow" /> {level}
        </span>
      );
    case "ORANGE":
      return (
        <span class="vorange">
          <BsExclamationSquareFill class="vorange" /> {level}
        </span>
      );
    case "RED":
      return (
        <span class="vred">
          <BsExclamationOctagonFill class="vred" /> {level}
        </span>
      );
    default:
      return (
        <span class="vunknown">
          <BsTriangle /> unknown (not enough information to determine)
        </span>
      );
  }
}

// loads the description if it exists (only for orange+)
function Description ({ vdata }) {
  if ('synopsis' in vdata) {
    return <p>Description: {vdata.synopsis}</p>;
  } else {
    return;
  }
}

export default VolcanoData;
