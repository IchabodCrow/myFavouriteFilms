import React, { useEffect, useState } from "react";

import { GenresButton } from "./GenresButton";

export const CloudGenres = (props) => {
  const [genresState, setGenresState] = useState([]);

  useEffect(() => {
    props.genresList();
  }, []);

  const handleClick = (genre, selected) => {
    !selected
      ? setGenresState([...genresState, genre])
      : setGenresState(...[genresState.filter((movie) => movie !== genre)]);
  };
  
  localStorage.setItem('movieGenres', genresState);

  return (
    <div className="flex flex-row flex-wrap justify-center bg-purple-100 my-5">
      {props.genres.map((genre) => (
        <GenresButton
          genre={genre}
          key={genre.name}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
