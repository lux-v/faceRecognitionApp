import "./App.css";
import React, { Component } from "react";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

const app = new Clarifai.App({
  apiKey: "6db728b25ee34dcc98294847c516e5c4",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      box: {},
      
    };
  }


  calculateFaceLocation = (data) =>{

     const faceLocation = data.rawData.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputImage');
     const width = Number(image.width);
     const height = Number(image.height);


      return{
        top_row: height * faceLocation.top_row,
        left_col: width * faceLocation.left_col,
        bottom_row: height - (height * faceLocation.bottom_row),
        right_col: width - (width * faceLocation.right_col),
      }

  }

  displayFaceLocation = (boxLocation) =>{
    console.log(boxLocation); 
    this.setState({box:boxLocation});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {

    console.log("click");
    this.setState({ imgUrl: this.state.input });

    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        //this.state.input
        this.state.input
      )
      .then( response => this.displayFaceLocation(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />

          <FaceRecognition boxLocation= {this.state.box} imageUrl={this.state.imgUrl} />
        </div>
      </div>
    );
  }
}

export default App;

