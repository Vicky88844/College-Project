import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {
  const [movie,setmovie]= useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );
      return request;
    }
      fetchData();
},[])

console.log(movie);

  function truncate(string, n){
    return string?.length > n ? string.substr(0,n-1) + '...' : string;
  }
  return (<header className='banner'style={{
    backgroundSize:"cover",
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png")`,
    backgroundPosition:"center center",
  }}>
    <div className='banner-contents'>
      <h1 className='banner-title'>
        Movie Name
      </h1>
      <div className='banner-buttons'>
        <button className='banner-button'>Play</button>
        <button className='banner-button'>My List</button>
      </div>
      <h1 className='banner-description'>
        {truncate(`this is a test passage
          this is a test passagethis is a test passage
          this is a test passage
          this is a test passage
          this is a test passage
          this is a test passage
          this is a test passage
          this is a test passage
          this is a test passage
          this is a test passage
          this is a test passage` , 150)
        }


      </h1>
    </div>
    <div className='banner--fadebutton' />
  </header> )
}

export default Banner