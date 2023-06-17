import React from 'react'
import "./Banner.css"

function Banner() {

  function truncate(string,  number) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }


  return (
    <header
      className="banner"
      style={{
        width: "auto",
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div class="banner__contents">
        <h1 class="banner__title">movie name</h1>
        <div class="banner__buttons">
          <button class="banner__button">play</button>
          <button class="banner__button">my list</button>
        </div>
        <h1 class="banner__description">
          {truncate("this is a test description. this is a test description", 50)}
        </h1>
      </div>
      <div class="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner