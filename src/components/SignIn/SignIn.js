import React from "react";
import  "./SignIn.css";

const SignIn = ({onRouteChange}) => {
    return(
    <div className="measure center">
        <div className="wrapper-signIn">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="input-signIn b pa2 input-reset ba bg-white hover-bg-white hover-black w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div className="">
            <input
            onClick={ () => onRouteChange('home')}
            className="input-signIn b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3 pointer">
            <a href="#0" className="f6 link dim white db"
            onClick={ () => onRouteChange('register')}
            >Register</a>
            </div>
        </div>
    </div>
    );
}

export default SignIn;