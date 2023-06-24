import React from 'react';
import Nav from "../../navbar/Nav";
import Banner from "../../banner/Banner"
import Row from "../../Row/Row";
import requests from '../../api/requests';


function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated} />
      <Row title="Netflix originals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <div className='footer' style={{height: '100px'}}>
      </div>
    </div>
  );
}

export default HomeScreen 