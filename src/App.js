import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import { Particles } from 'react-tsparticles';

const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 70,
    },
    opacity: {
      value: 1.5,
    },
    shape: {
      type: "line",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};


function App() {
  return (
    <div className="App">

      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="particles"
      />

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
     {/* 
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
