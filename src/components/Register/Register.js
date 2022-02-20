import React from "react";
import  "./Register.css";

const Register = ({onRouteChange}) => {
    return(
    <div className="measure center">
        <div className="wrapper-signIn">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Register</legend>
            
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                <input className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100" type="text" name="name"  id="name"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Username</label>
                <input className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100" type="text" name="username"  id="username"/>
            </div>

            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="input-signIn pa2 input-reset ba bg-white hover-bg-white hover-black w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div className="">
            <input
            onClick={ () => onRouteChange('home')}
            className="input-signIn b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit" value="Register"/>
            </div>
            <div className="lh-copy mt3 pointer">
            <a href="#0" className="f6 link dim white db"
            onClick={ () => onRouteChange('signin')}
            >Sign In</a>
            </div>
        </div>
    </div>
    );
}

export default Register;