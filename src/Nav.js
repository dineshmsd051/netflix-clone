import React, { useState, useEffect } from "react";
import "./Nav.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Nav() {

  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
  
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])
  

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
        />
        <img
          className="nav__avatar"
          src="https://i.imgur.com/WM6zTNc.png"
          alt="netflix-avatar"
          onClick={() => history.push("./profile")}
        />
      </div>
    </div>
  );
}

export default Nav