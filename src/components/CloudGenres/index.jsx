import React, { useEffect, useState } from "react";

const CloudGenres = (props) => {
  const [genresId, setGenresId] = useState([]);

  useEffect(() => {
    props.genresList();
  }, []);

  const handleClick = (e) => {
    const movieId = e.target.id;
    const findId = genresId.findIndex((item) => item === movieId);
    findId === -1
      ? setGenresId([...genresId, movieId])
      : setGenresId(...[genresId.filter((movie) => movie !== movieId)]);
    localStorage.setItem("moviesGenres", genresId);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center bg-purple-100 my-5">
      {props.genres.map((genre, index) => (
        <div
          className={`${
            genresId.find((item) => item == genre.id)
              ? "border-green-400 border-4 border-opacity-50"
              : "border-transparent border-4"
          } bg-yellow-300 cursor-pointer bg-opacity-50 w-auto h-auto text-center mx-3 my-3 p-2 rounded-lg`}
          key={index}
          id={genre.id}
          onClick={handleClick}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default CloudGenres;
