import "./App.css";
import React, { Component } from "react";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import "tachyons";

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
      route: "signin",
      isSignedIn: false,

      user: {
        id: "",
        name: "",
        username: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }

    this.setState({ route: route });
  };

  calculateFaceLocation = (data) => {
    const faceLocation =
      data.rawData.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      top_row: height * faceLocation.top_row,
      left_col: width * faceLocation.left_col,
      bottom_row: height - height * faceLocation.bottom_row,
      right_col: width - width * faceLocation.right_col,
    };
  };

  displayFaceLocation = (boxLocation) => {
    this.setState({ box: boxLocation });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        //this.state.input
        this.state.input
      )
      .then((response) => {
        if (response) {
          fetch("http://localhost:3001/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.displayFaceLocation(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navigation
            onRouteChange={this.onRouteChange}
            isSignedIn={this.state.isSignedIn}
          />

          {this.state.route === "home" ? (
            <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />

              <FaceRecognition
                boxLocation={this.state.box}
                imageUrl={this.state.imgUrl}
              />
            </div>
          ) : this.state.route === "register" ? (
            <Register
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          ) : (
            <SignIn
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
