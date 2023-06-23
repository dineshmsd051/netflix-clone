import React, { useState } from "react";
import "./SignUpScreen.css";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const signIn = (e) => {
    e.preventDefault();

  }

const handleSignUp = () => {
  if (!email || !password) {
    alert("email and password is required");
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('userCredential.user', userCredential.user)
      alert(`${userCredential.user.email} registered success!`)
    })
    .catch((error) => {
      console.log("error.message", error.message);
      alert(error.message)
    });
};

  return (
    <div className="signUpScreen">
      <div className="signUp__wrapper">
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4 className="signUpScreen__signUpNow">
          <span className="signUpScreen__grey">New to Netflix?</span>
          <span className="signUpScreen__link" onClick={handleSignUp}>
            {" "}
            Sign Up now.
          </span>
        </h4>
      </div>
    </div>
  );
}

export default SignUpScreen