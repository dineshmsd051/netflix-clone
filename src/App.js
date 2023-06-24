import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./screens/home-screen/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/login-screen/LoginScreen';
import { auth } from "./firebase/firebase"
import ProfileScreen from './screens/profile-screen/ProfileScreen';
import { login, logout, selectUser } from './redux/userSlice';
 
function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
      return unSubscribe;
    }))
  }, [])
  


  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
