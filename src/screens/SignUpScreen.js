import React from 'react';
import "./SignUpScreen.css"

function SignUpScreen() {
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign In</button>
        <h4 className="signUpScreen__signUpNow">
          <span className="signUpScreen__grey">New to Netflix?</span>
          <span className='signUpScreen__link'> Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen