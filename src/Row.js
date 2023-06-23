import React, { useEffect, useState } from 'react'
import "./Row.css";
import api from './api';
import requests from './requests';

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(fetchURL);
      const movies = request?.data?.results;
      setMovies(movies);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h3>{title}</h3>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${IMG_BASE_URL}${
              isLargeRow ? movie.backdrop_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row