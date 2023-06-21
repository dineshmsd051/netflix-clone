import React from 'react';
import "./LoginScreen.css"

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button class="loginScreen__button">Sign In</button>
        <div class="loginScreen__gradient"></div>
      </div>
      <div class="loginScreen__body">
        <>
          <h1>Unlimited movies, TV shows and more</h1>
          <h2 style={{paddingBottom: '2rem'}}>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </>
      </div>
    </div>
  );
}

export default LoginScreen