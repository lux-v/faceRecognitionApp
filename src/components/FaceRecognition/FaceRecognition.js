import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxLocation}) => {
  return (
    <div className="center">
      <div className= "location-wrapper">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height= "auto"
        />     
        <div className="bounding-box" style={{top:boxLocation.top_row, bottom: boxLocation.bottom_row, left: boxLocation.left_col, right: boxLocation.right_col} }></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
