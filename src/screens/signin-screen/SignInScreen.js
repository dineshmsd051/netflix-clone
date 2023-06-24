import React, { useState } from "react";
import "./SignInScreen.css";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignInScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)


  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("email and password is required");
      return
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      console.log('authUser', authUser)
    }).catch((error) => {
      alert(`oops! something went wrong. ${error}`);
      console.log('error', error)
    })
  }

  const handleSignUp = () => {
    if (!email || !password) {
      alert("email and password is required");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('userCredential.user', userCredential.user)
        alert(`${userCredential.user.email} registered success!`)
      })
      .catch((error) => {
        alert("oops! something went wrong.");
        console.log("error.message", error.message);
      });
  };

  return (
    <div className="SignInScreen">
      <div className="signIn__wrapper">
        <h1>Sign {isSignUp ? "Up" : "In"}</h1>
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
        {isSignUp ? (
          <button type="submit" onClick={handleSignUp}>
            Sign Up
          </button>
        ) : (
          <button type="submit" onClick={handleSignIn}>
            Sign In
          </button>
        )}
        <h4 className="SignInScreen__signInNow">
          {isSignUp ? (
            <>
              <span className="SignInScreen__grey">
                already have a account?
              </span>
              <span
                className="SignInScreen__link"
                onClick={() => setIsSignUp(false)}
              >
                {" "}
                Sign In now.
              </span>
            </>
          ) : (
            <>
              <span className="SignInScreen__grey">New to Netflix?</span>
              <span
                className="SignInScreen__link"
                onClick={() => setIsSignUp(true)}
              >
                {" "}
                Sign Up now.
              </span>
            </>
          )}
        </h4>
      </div>
    </div>
  );
}

export default SignInScreen