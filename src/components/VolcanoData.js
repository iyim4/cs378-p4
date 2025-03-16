import React from 'react';
import { BsTriangle, BsCheckCircleFill, BsExclamationTriangleFill, 
    BsExclamationSquareFill, BsExclamationOctagonFill } from "react-icons/bs";

// This is a functional component that represents a single volcano
// it renders the name, observatory, alert level, and synopsis
// vdata is the data entry of ONE volcano
const VolcanoData = ({ vdata }) => {

  // set the volcano name
  var vname = "ERROR";
  if ('volcano_name' in vdata) {
    vname = vdata.volcano_name + " Volcano";
  } else if ('volcano_name_appended' in vdata) {
    vname = vdata.volcano_name_appended;
  }

  // render volcano entry
  return (
    <div className="entry">
      <h2>{vname}</h2>
      <p>{vdata.obs_fullname}, Status: {getIcon(vdata)}</p> 
      <Description vdata={vdata} />
    </div>
  )
};

function getIcon(vdata) {
  var level = vdata.alert_level;
  if (level != "WARNING") {
    level = level.toLowerCase();
  }

  switch(vdata.color_code) {
    case "GREEN":
      return (
        <span className="vgreen">
          <BsCheckCircleFill className="vgreen" /> {level}
        </span>
      );
    case "YELLOW":
      return (
        <span className="vyellow">
          <BsExclamationTriangleFill className="vyellow" /> {level}
        </span>
      );
    case "ORANGE":
      return (
        <span className="vorange">
          <BsExclamationSquareFill className="vorange" /> {level}
        </span>
      );
    case "RED":
      return (
        <span className="vred">
          <BsExclamationOctagonFill className="vred" /> {level}
        </span>
      );
    default:
      return (
        <span className="vunknown">
          <BsTriangle /> unknown (not enough information to determine)
        </span>
      );
  }
}

function Description ({ vdata }) {
  if ('synopsis' in vdata) {
    return <p>Description: {vdata.synopsis}</p>;
  } else {
    return;
  }
}

export default VolcanoData;
