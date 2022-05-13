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
    <>
      <h2 className="text-white font-bold opacity md:text-xl p-4">{title}</h2>

      <div className="flex relative items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className=" hidden absolute left-0 top-[30%] bg-white rounded-full opacity-50 group-hover:block hover:opacity-100 cursor-pointer z-10"
          size={40}
        />
        <div
          className=" w-full h-full flex relative items-start px-2 scroll-smooth overflow-x-scroll scrollbar-hide"
          id={rowId}
        >
          {movies.map((item, id) => (
            <Moive key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className=" hidden absolute right-0 top-[30%] bg-white rounded-full opacity-50 group-hover:block hover:opacity-100 cursor-pointer z-10"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
