import axios from "axios";
import Moive from "./Moive";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    let slider = document.getElementById(rowId);
    slider.scrollLeft -= 500;
  };

  const sliderRight = () => {
    let slider = document.getElementById(rowId);
    slider.scrollLeft += 500;
  };

  return (
    <div className="w-[90%] m-auto">
      <h2 className="text-white font-bold opacity md:text-xl m-2">{title}</h2>

      <div className="flex relative items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="hidden absolute -left-5 top-[30%] bg-white rounded-full opacity-50 group-hover:block hover:opacity-100 cursor-pointer z-10 "
          size={40}
        />
        <div
          className=" w-full h-full flex relative items-start mx-2 scroll-smooth overflow-x-scroll scrollbar-hide"
          id={rowId}
        >
          {movies.map((item) => (
            <Moive key={item?.id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="hidden absolute -right-5 top-[30%] bg-white rounded-full opacity-50 group-hover:block hover:opacity-100 cursor-pointer z-10"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
