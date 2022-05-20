import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" w-[90%] m-auto ">
        <h2 className="text-white font-bold opacity md:text-xl p-4">My Movies</h2>

        <div className="flex relative items-center  justify-items-center group">
          <div className=" w-full h-full flex flex-wrap  items-start px-2 ">
            {movies.map((item, id) => (
              <div key={item.id} className=" w-1/3 md:w-1/4 lg:w-1/5 relative cursor-pointer p-2">
                <img
                  className="object-cover w-full max:h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/20 opacity-0 hover:opacity-100 text-white">
                  <p
                    onClick={() => deleteShow(item.id)}
                    className="absolute text-gray-300 top-4 right-4 text-xl"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
                <span className=" flex text-white text-base py-2">{item?.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedMovies;
