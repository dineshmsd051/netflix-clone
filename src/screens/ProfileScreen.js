import React from 'react';
import "./ProfileScreen.css";
import Nav from '../Nav';
import { auth } from "../firebase";
import { selectUser } from "../features/userSlice"
import { useSelector } from 'react-redux';
import PlansScreen from './PlansScreen';

function ProfileScreen() {

const user = useSelector(selectUser);

  return (
    <div class="profileScreen">
      <Nav />
      <div class="profileScreen__body">
        <h1>Edit Profile</h1>
        <div class="profileScreen__info">
          <img src="https://i.imgur.com/WM6zTNc.png" alt="" />
          <div class="profileScreen__details">
            <h2>{user.email}</h2>
            <div class="profileScreen__plans">
              <h3>Plans (Current Plan: premium)</h3>
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