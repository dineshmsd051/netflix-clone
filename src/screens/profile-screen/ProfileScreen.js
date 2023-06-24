import React from 'react';
import { useSelector } from "react-redux";
import "./ProfileScreen.css";
import Nav from '../../navbar/Nav';
import { auth } from "../../firebase/firebase";
import { selectUser } from "../../redux/userSlice"
import PlansScreen from '../plans-screen/PlansScreen';

function ProfileScreen() {

const user = useSelector(selectUser);
  console.log('user', user)
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://i.imgur.com/WM6zTNc.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen