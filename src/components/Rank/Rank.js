import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="rankContainer">
      <div className="">
        <p>{name}, your current rank is</p>
        <p>#{entries}</p>
      </div>
    </div>
  );
};

export default Rank;
