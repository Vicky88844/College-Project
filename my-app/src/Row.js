import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    try {
      const response = await axios.get(`/movie/${movie.id}/videos?api_key=dbc825f980685e71caf4ee196227479c`);
      const trailerKey = response.data.results[0]?.key;
      if (trailerKey) {
        const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
        window.open(youtubeUrl, '_blank', 'fullscreen=yes');
      } else {
        throw new Error('Trailer not found');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
              className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
              key={movie.id}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default Row;
