import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  //  Randomly selecte a movie as home page background
  const movie = movies[Math.floor(Math.random() * (movies.length - 1))];
  //  API CALLS
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movies.length);

  // function truncateString(str, num) {
  //   return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  // }
  const truncateString = (str, num) => (str?.length > num ? str.substr(0, num - 1) + "..." : str);

  return (
    <div className="w=full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w-full top-[20%] p-5 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold pb-3">{movie?.title}</h1>
        <div className="my-4">
          <button className=" text-white bg-[rgb(51,51,51,0.5)] hover:bg-gray-500 py-2 px-5 mr-4">
            Paly
          </button>
          <button className=" bg-[rgb(51,51,51,0.5)] hover:bg-gray-500 text-white py-2 px-5 ">
            Watch later
          </button>
        </div>
        <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
        <p className="max-w-[80%] md:max-w-[65%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
