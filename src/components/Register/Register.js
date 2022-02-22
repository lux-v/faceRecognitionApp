import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: "",
      registerUsername: "",
      registerEmail: "",
      registerPassword: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onUsernameChange = (event) => {
    this.setState({ registerUsername: event.target.value });
  };

  oneEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onRegisterSubmit = () => {
    console.log(this.state);

    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.registerName,
        username: this.state.registerUsername,
        email: this.state.registerEmail,
        password: this.state.registerPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.props.loadUser(data);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="measure center">
        <div className="wrapper-signIn">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Register</legend>

            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Name
              </label>
              <input
                onChange={this.onNameChange}
                className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Username
              </label>
              <input
                onChange={this.onUsernameChange}
                className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
                type="text"
                name="username"
                id="username"
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={this.oneEmailChange}
                className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={this.onPasswordChange}
                className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={this.onRegisterSubmit}
              className="input-signIn b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
          <div className="lh-copy mt3 pointer">
            <a
              href="#0"
              className="f6 link dim white db"
              onClick={() => onRouteChange("signin")}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
