import React from "react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Moives = ({ item, id }) => {
  const [Like, setLike] = useState(false);
  return (
    <div>
      <div
        key={item.id}
        id={"slider"}
        className="flex-none relative w-[160px] md:w-[240px] lg:w-[300px] cursor-pointer p-2"
      >
        <img
          className="object-cover w-full max:h-[200px]"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />

        <div className="text-white absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100">
          <p className="absolute top-4 left-4 text-gray-200">
            {Like ? <FaHeart /> : <FaRegHeart />}
          </p>
        </div>
      </div>
      <span className="flex text-white text-base p-2">{item?.title}</span>
    </div>
  );
};

export default Moives;
