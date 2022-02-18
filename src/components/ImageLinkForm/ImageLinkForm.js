import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="imageLinkFormComponent">
        This Magic Brain will detect faces in your pictures.
      </p>
      <div className="center">
        <div className="wrapper center">
          <input
            type="text"
            style={{ height: "36px", width: "70%" }}
            onChange={onInputChange}
          />
          <button
            style={{ height: "42px", width: "30%" }}
            onClick={onButtonSubmit}
          >
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
