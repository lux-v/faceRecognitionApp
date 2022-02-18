import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <img
        alt=""
        src={imageUrl}
        style={{ width: "300px", height: "auto", margin: "5px" }}
      />
    </div>
  );
};
export default FaceRecognition;
