import React from "react";
import './ImageLinkForm.css'



const ImageLinkForm = () => {
    return(
        <div>
            <p className="imageLinkFormComponent">
            This Magic Brain will detect faces in your pictures.
            </p>
            <div className="center">
                <div class="wrapper center">
                    <input type='text' style={{height:"36px", width:'70%'}}/>
                    <button style={{height:"42px", width:'30%'}}>Submit </button>
                </div>

            </div>
        </div>
    );
}

export default ImageLinkForm;