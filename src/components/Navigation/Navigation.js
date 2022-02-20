import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn){
            return(
                <nav style={{display:'flex', justifyContent:'flex-end', padding:'20px'}}>
                <a id="sign-out-button" className="f6 link dim ba ph3 pv2 mb2 dib white br3" onClick={ () => onRouteChange('signout')} href="#0">Sign Out</a>
                </nav>
            );
        }else{
            return(
                <nav style={{display:'flex', justifyContent:'flex-end', padding:'20px'}}>
                <a id="sign-out-button" className="f6 link dim ba ph3 pv2 mb2 dib white br3 mr2" onClick={ () => onRouteChange('signin')} href="#0">Sign In</a>
                <a id="sign-out-button" className="f6 link dim ba ph3 pv2 mb2 dib white br3" onClick={ () => onRouteChange('register')} href="#0">Register</a>
                </nav>
            );
        }
}

export default Navigation;