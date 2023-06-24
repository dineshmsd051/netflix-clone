import React, { useEffect } from 'react';
import HomeScreen from "./screens/HomeScreen"
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import ProfileScreen from './screens/ProfileScreen';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
 
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
        </Switch>)}
      </Router>
    </div>
  );
}

export default App;
