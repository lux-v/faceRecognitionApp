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
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    console.log("click");
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        "https://www.pngall.com/wp-content/uploads/5/Beautiful-Woman-Face-PNG-File.png"
      )
      .then(
        function (response) {
          console.log(
            response.rawData.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function (err) {}
      );
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
        </div>
        <FaceRecognition imageUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
