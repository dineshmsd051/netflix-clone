import React, { useEffect, useState } from 'react'
import "./Banner.css";
import api from "../api/api";
import requests from "../api/requests"

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.fetchTrending);
      const movies = request?.data?.results;
      // for getting and setting random trending movies
      const randomMovie = Math.floor(Math.random() * movies.length - 1)
      setMovie(movies[randomMovie]);
      return request;
    }
    fetchData();
  }, [])
  
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
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        marginTop: "40px",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => alert("feature will available soon! 🥳")}
          >
            play
          </button>
          <button
            className="banner__button"
            onClick={() => alert("feature will available soon! 🥳")}
          >
            my list
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
    </header>
  );
}

export default Banner