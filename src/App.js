import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import { Component } from "react/cjs/react.production.min";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "6db728b25ee34dcc98294847c516e5c4",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict(
        "6db728b25ee34dcc98294847c516e5c4",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (response) {
          console.log(response);
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

        {/* 
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
