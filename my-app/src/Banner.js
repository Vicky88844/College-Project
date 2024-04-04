import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      } catch (err) {
        console.error('Movie fetch error:', err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (movie?.id) {
      async function fetchTrailer() {
        try {
          const response = await axios.get(`/movie/${movie.id}/videos?api_key=dbc825f980685e71caf4ee196227479c`);
          const trailerKey = response.data.results.find((video) => video.type === "Trailer")?.key;
          setTrailerUrl(trailerKey);
        } catch (err) {
          console.error('Trailer fetch error:', err);
        }
      }
      fetchTrailer();
    }
  }, [movie]);

  const handleClick = () => {
    if (trailerUrl) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailerUrl}`;
      window.open(youtubeUrl, '_blank');
    } else {
      console.error('No trailer URL available');
    }
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header className='banner' style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
    }}>
      <div className='banner-contents'>
        <h1 className='banner-title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner-buttons'>
          <button className='banner-button' onClick={handleClick}>Play</button>
        </div>
        <h1 className='banner-description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner--fadebutton' />
    </header>
  );
}

export default Banner;
