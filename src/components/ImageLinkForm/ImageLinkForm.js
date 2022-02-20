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
            className="input-imageLinkForm pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
            type="text"
            style={{ height: "42px", width: "70%" }}
            onChange={onInputChange}
          />
          <button
            id="submit-button"
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
